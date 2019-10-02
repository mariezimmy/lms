from pymongo import MongoClient


def db_init(db, documents):
    for d in documents:
        db.add_doc(d)


class Database:

    client = None
    db = None
    docs = None
    db_up = False

    def __init__(self, url='localhost', port=27017, db_name='donne_documents'):
        self.client = MongoClient(url, port)
        self.db = self.client[db_name]
        self.docs = self.db.documents
        self.db_up = True

    def get_doc(self, query):
        # EX: db.get_doc({'author': 'John Donne'})
        doc = self.docs.find_one(query)
        return doc

    def get_multi_doc(self, query):
        # EX: db.get_multi_doc({'author': 'John Donne'})
        doc = self.docs.find(query)
        return doc

    def get_all_docs(self):
        # If we make this larger, we will remove the list() and just leave it as a cursor
        return list(self.docs.find())

    def get_all_docs_sorted(self, key, direction):
        # If we make this larger, we will remove the list() and just leave it as a cursor
        return list(self.docs.find().sort(key, direction))

    def add_doc(self, new_doc):
        docs = self.db.documents
        new_doc_id = docs.insert_one(new_doc).inserted_id
        return new_doc_id
