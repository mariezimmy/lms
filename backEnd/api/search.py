import database
from flask import Blueprint, make_response, json, request
import pymongo
from bson.objectid import ObjectId

from nltk import word_tokenize
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.feature_extraction.text import CountVectorizer
import string
import pandas
import numpy

# Blueprint Configuration
doc_bp = Blueprint('search_bp', __name__,
                   template_folder='templates',
                   static_folder='build/',
                   url_prefix='/')

db = database.Database(
    url='localhost', port=27017, db_name='donne_documents')

@doc_bp.route('/search/<string:query>', methods=['GET'])
def search(query):
    if(db):
        docs = db.get_all_docs()
        for d in docs:
            d['_id'] = str(d['_id'])

        query = [PorterStemmer().stem(word.lower().translate(str.maketrans('', '', string.punctuation))) for word in query.split(" ")]
        print("Searching for: " + str(query))

        docStrings = list()
        for doc in docs:
            string_info = list(str(v) for v in doc.values())
            docStrings.append(" ".join(string_info))
        # docStrings = [" ".join(list(doc.values())) for doc in docs]
        docStrings = [doc.lower().translate(str.maketrans('', '', string.punctuation)) for doc in docStrings]
        stemStrings = []
        for doc in docStrings:
            stemStrings.append(" ".join([PorterStemmer().stem(token) for token in word_tokenize(doc)]))
        # print(stemStrings)


        tfidf_vectorizer=TfidfVectorizer(use_idf=True)
        tfidf_vectorizer_vectors=tfidf_vectorizer.fit_transform(stemStrings)
        documentScores = []
        for vector in tfidf_vectorizer_vectors:
            df = pandas.DataFrame(vector.T.todense(), index=tfidf_vectorizer.get_feature_names(), columns=["tfidf"])
            df = df.sort_values(by=["tfidf"],ascending=False)
            keys = df.index.values.tolist()
            values = df.values.tolist()
            thisDocumentPerWordScore = []
            for token in query:
                score = 0
                for i in range(len(keys)):
                    if token == keys[i]:
                        score += values[i][0]

                thisDocumentPerWordScore.append(score)
            documentScores.append(sum(thisDocumentPerWordScore))
        idxes = numpy.argsort(documentScores)[::-1]
        sortedDocs = list(numpy.array(docs)[idxes])
        
        sortedDocs = json.dumps(sortedDocs)
        response = make_response(
            sortedDocs, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(
            None, 500, {'Content-Type': 'application/json'})

    return response

@doc_bp.route('/tag_search/<string:query>', methods=['GET'])
def tag_search(query):
    if(db):
        found = list(db.docs.find({"tags": query}))
        for d in found:
            d['_id'] = str(d['_id'])
        print(list(found))
        found = json.dumps(list(found))
        response = make_response(
            found, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(
            None, 500, {'Content-Type': 'application/json'})

    return response
