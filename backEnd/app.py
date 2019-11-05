import os
from flask import Flask, send_from_directory
import waitress
from api import documents, search, sort, tag

app = Flask(__name__, static_folder='build/')
app.register_blueprint(documents.doc_bp)
app.register_blueprint(search.doc_bp)
app.register_blueprint(sort.doc_bp)
app.register_blueprint(tag.doc_bp)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


# Serve React App
if __name__ == '__main__':
    waitress.serve(app, host='localhost', port=3000)
