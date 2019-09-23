import database
import os
from flask import Flask, send_from_directory, make_response, json, request
import waitress
from bson.objectid import ObjectId


app = Flask(__name__, static_folder='build/')
donne_database = None


# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
	if path != "" and os.path.exists(app.static_folder + path):
		return send_from_directory(app.static_folder, path)
	else:
		return send_from_directory(app.static_folder, 'index.html')


@app.route('/documents', methods=['GET'])
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


@app.route('/document/<string:doc_id>', methods=['GET'])
def single_doc(doc_id):
	if(donne_database):
		doc = donne_database.get_doc({'_id': ObjectId(doc_id)})
		doc['_id'] = str(doc['_id'])
		doc = json.dumps(doc)
		response = make_response(doc, 200, {'Content-Type': 'application/json'})
	else:
		response = make_response(None, 404, {'Content-Type': 'application/json'})

	return response


@app.route('/document', methods=['POST'])
def create_doc():
	# curl - i - H "Content-Type: application/json" - X POST - d '{"title":"Read a book"}' http: // localhost: 5000 / todo / api / v1 .0 / tasks
	print(request.json)
	if(donne_database and request.json):
		new_id = donne_database.add_doc(request.json)
		new_doc = donne_database.get_doc({'_id': new_id})
		new_doc['_id'] = str(new_doc['_id'])
		new_doc = json.dumps(new_doc)
		response = make_response(new_doc, 201, {'Content-Type': 'application/json'})
	else:
		response = make_response(None, 404, {'Content-Type': 'application/json'})

	return response


if __name__ == '__main__':
	donne_database = database.Database(url = 'localhost', port = 27017, db_name = 'donne_documents')
	#DO ONCE
	# database.db_init(donne_database, [database.TEST_DOC_1, database.TEST_DOC_3])
	waitress.serve(app, port=3000)
