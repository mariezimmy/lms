from flask import Flask, render_template
from waitress import serve
from database import Database

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    donne_database = Database(url = 'localhost', port = 27017, db_name = 'donne_documents')
    serve(app, host='0.0.0.0', port=3000)
