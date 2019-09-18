from flask import Flask, render_template
from waitress import serve
import database

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    donne_database = database.Database(url = 'localhost', port = 27017, db_name = 'donne_documents')
    #DO ONCE
    #database.db_init(donne_database, [database.TEST_DOC_1, database.TEST_DOC_3])
    serve(app, host='0.0.0.0', port=3000)
