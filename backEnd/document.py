from json import dumps
class Document:

    def __init__(self, mongo_dict):
        self.__dict__.update(mongo_dict)

    def __str__(self):
        prnt = ""
        for k, v in self.__dict__.items():
            prnt += str(k) + ": " + str(v) + "\n"
        return prnt

    def to_json(self):
        doc_dict = dict(self.__dict__)
        doc_dict['_id'] = str(doc_dict['_id'])
        json_doc = dumps(doc_dict, indent=4, sort_keys=True)
        return json_doc
