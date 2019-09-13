import pymongo
from pymongo import MongoClient

client = MongoClient()
client = MongoClient('localhost', 27017)