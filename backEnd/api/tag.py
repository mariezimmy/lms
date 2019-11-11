import database
from flask import Blueprint, make_response, json, request
import pymongo
from bson.objectid import ObjectId

# Blueprint Configuration
doc_bp = Blueprint('tag_bp', __name__,
                   template_folder='templates',
                   static_folder='build/',
                   url_prefix='/')

db = database.Database(
    url='localhost', port=27017, db_name='donne_documents')

@doc_bp.route('/tag/<string:doc_id>/<string:tag>', methods=['POST'])
def tag_doc(doc_id, tag):
    if(db):
        db.docs.update({ '_id': ObjectId(doc_id) }, { '$push': { 'tags': tag } })    
        doc = db.get_doc({'_id': ObjectId(doc_id)})    
        doc['_id'] = str(doc['_id'])
        doc = json.dumps(doc)
        response = make_response(
        doc, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(
            None, 404, {'Content-Type': 'application/json'})

    return response

@doc_bp.route('/tag/<string:doc_id>', methods=['GET'])
def get_tags(doc_id):
    if(db):
        doc = db.get_doc({'_id': ObjectId(doc_id)})
        tags =  doc['tags'] 
        response = make_response(
        tags, 200, {'Content-Type': 'application/json'})
    else:
        response = make_response(
            None, 404, {'Content-Type': 'application/json'})

    return response