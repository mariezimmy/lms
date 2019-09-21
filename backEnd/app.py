from flask import Flask, render_template, make_response, json
from waitress import serve
from bson.objectid import ObjectId
import database

app = Flask(__name__)
donne_database = None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/documents')
def doc_list():
    if(donne_database):
        docs = donne_database.get_all_docs()
        for d in docs:
            d['_id'] = str(d['_id'])
        docs = json.dumps(docs)
        response = make_response(docs, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(None, 404, {'Content-Type': 'application/json'})

    return response

@app.route('/document/<string:doc_id>')
def single_doc(doc_id):
    if(donne_database):
        doc = donne_database.get_doc({'_id': ObjectId(doc_id)})
        doc['_id'] = str(doc['_id'])
        doc = json.dumps(doc)
        response = make_response(doc, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(None, 404, {'Content-Type': 'application/json'})

    return response

if __name__ == '__main__':
    donne_database = database.Database(url = 'localhost', port = 27017, db_name = 'donne_documents')
    #DO ONCE
    #database.db_init(donne_database, [database.TEST_DOC_1, database.TEST_DOC_3])
    serve(app, host='0.0.0.0', port=3000)
