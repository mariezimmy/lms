import database
from flask import Blueprint, make_response, json, request
import pymongo
from bson.objectid import ObjectId
from bson.json_util import dumps
from urllib import parse

# Blueprint Configuration
doc_bp = Blueprint('filter_bp', __name__,
                   template_folder='templates',
                   static_folder='build/',
                   url_prefix='/')

db = database.Database(
    url='localhost', port=27017, db_name='donne_documents')

@doc_bp.route('/filter/', methods=['GET'])
def filter():
    if(db):
    
        
        print("args: ", json.dumps(request.args.to_dict()))
        
        # parse filter criteria
        #filterCriteria = parse.parse_qs(request.args)
        
        #print("criteria: ", filterCriteria)
        
        docs = dumps(db.get_multi_doc(request.args.to_dict()))

        print("docs :", docs)
        
        response = make_response(
            docs, 200, {'Content-Type': 'application/json'})
            
        print("response: ", response)
            
    else:
        response = make_response(
            None, 500, {'Content-Type': 'application/json'})

    return response
