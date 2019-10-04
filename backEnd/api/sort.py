import database
from flask import Blueprint, make_response, json, request
import pymongo
from bson.objectid import ObjectId

# Blueprint Configuration
doc_bp = Blueprint('sort_bp', __name__,
                   template_folder='templates',
                   static_folder='build/',
                   url_prefix='/')

db = database.Database(
    url='localhost', port=27017, db_name='donne_documents')

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
            None, 500, {'Content-Type': 'application/json'})

    return response
