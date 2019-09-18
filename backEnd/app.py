import os
from flask import Flask, render_template, send_from_directory
import waitress
import database

# @app.route('/')
# def index():
# 	# return send_from_directory("./", "app.py")
# 	return send_from_directory("./static/react/", "index.html")
#     # return render_template('index.html')

app = Flask(__name__, static_folder='build/')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
	if path != "" and os.path.exists(app.static_folder + path):
		return send_from_directory(app.static_folder, path)
	else:
		return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
	donne_database = database.Database(url = 'localhost', port = 27017, db_name = 'donne_documents')
	#DO ONCE
	#database.db_init(donne_database, [database.TEST_DOC_1, database.TEST_DOC_3])
	waitress.serve(app, host='0.0.0.0', port=3000)
	# app.run(use_reloader=True, port=5000, threaded=True)
