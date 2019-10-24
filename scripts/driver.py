import database
from bson.objectid import ObjectId

donne_database = None

if __name__ == '__main__':
    donne_database = database.Database(
        url='localhost', port=27017, db_name='donne_documents')
    database.db_init(donne_database, [database.DOC_1, database.DOC_2, database.DOC_3, database.DOC_4, database.DOC_5, database.DOC_6])
