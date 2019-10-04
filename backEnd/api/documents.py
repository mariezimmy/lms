import database
from flask import Blueprint, make_response, json, request
import pymongo
from bson.objectid import ObjectId

# Blueprint Configuration
doc_bp = Blueprint('doc_bp', __name__,
                   template_folder='templates',
                   static_folder='build/',
                   url_prefix='/')

db = database.Database(
    url='localhost', port=27017, db_name='donne_documents')


@doc_bp.route('/documents', methods=['GET'])
def doc_list():
    if(db):
        docs = db.get_all_docs()
        for d in docs:
            d['_id'] = str(d['_id'])
        docs = json.dumps(docs)
        response = make_response(
            docs, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(
            None, 404, {'Content-Type': 'application/json'})

    return response


@doc_bp.route('/documents/<string:doc_id>', methods=['GET'])
def single_doc(doc_id):
    if(db):
        doc = db.get_doc({'_id': ObjectId(doc_id)})
        doc['_id'] = str(doc['_id'])
        doc = json.dumps(doc)
        response = make_response(
            doc, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(
            None, 404, {'Content-Type': 'application/json'})

    return response


@doc_bp.route('/documents', methods=['POST'])
def create_doc():
    print(request.json)
    if(db and request.json):
        new_id = db.add_doc(request.json)
        new_doc = db.get_doc({'_id': new_id})
        new_doc['_id'] = str(new_doc['_id'])
        new_doc = json.dumps(new_doc)
        response = make_response(
            new_doc, 201, {'Content-Type': 'application/json'})
    else:
        response = make_response(
            None, 404, {'Content-Type': 'application/json'})

    return response


@doc_bp.route('/sort/<string:sortCriteria>/<string:ascending>', methods=['GET'])
def sort(sortCriteria, ascending):
    if(db):
        docs = db.get_all_docs_sorted(
            sortCriteria, pymongo.ASCENDING if ascending == 'ascending' else pymongo.DESCENDING)
        for d in docs:
            d['_id'] = str(d['_id'])
        docs = json.dumps(docs)
        response = make_response(
            docs, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(
            None, 404, {'Content-Type': 'application/json'})

    return response


@doc_bp.route('/search/<string:query>', methods=['GET'])
def search(query):
    if(db):
        docs = db.search_docs(query)
        for d in docs:
            d['_id'] = str(d['_id'])
        docs = json.dumps(docs)
        response = make_response(
            docs, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(
            None, 404, {'Content-Type': 'application/json'})

    return response
