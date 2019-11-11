import IDocumentService from "./IDocumentService";
import Metadata from "../../model/Metadata";
import LitDocument from "../../model/LitDocument";
import SortBy from "../../model/SortBy";

export default class LocalDocumentService implements IDocumentService {
  public async getDocuments(): Promise<LitDocument[]> {
    let documents = await (await fetch(
      "http://localhost:3000/documents", { mode: 'no-cors' })).json();
    console.log(documents);
    documents = documents.map(document => {
      return new LitDocument(
        document._id,
        document.author,
        document.text,
        document.title
      );
    });
    return new Promise((resolve, reject) => resolve(documents));
  }

  public async sortDocuments(sortBy: SortBy): Promise<LitDocument[]> {
    let documents = await (await fetch(
      "http://localhost:3000/sort/" + sortBy.endpoint, { mode: 'no-cors' })).json();
    console.log(documents);
    documents = documents.map(document => {
      return new LitDocument(
        document._id,
        document.author,
        document.text,
        document.title
      );
    });
    return new Promise((resolve, reject) => resolve(documents));
  }

  public async searchDocuments(query: string): Promise<LitDocument[]> {
    let documents = await (await fetch(
      "http://localhost:3000/search/" + query, {
      mode: 'no-cors', headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })).json();
    console.log(documents);
    documents = documents.map(document => {
      return new LitDocument(
        document._id,
        document.author,
        document.text,
        document.title
      );
    });
    return new Promise((resolve, reject) => resolve(documents));
  }
  
  public async filterDocuments(query: string): Promise<LitDocument[]> {
    console.log("fetching");
    let documents = await (await fetch(
      "http://localhost:3000/filter/" + query, {
      mode: 'no-cors', headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })).json();
    console.log(documents);
    documents = documents.map(document => {
      return new LitDocument(
        document._id,
        document.author,
        document.text,
        document.title
      );
    });
    return new Promise((resolve, reject) => resolve(documents));
  }
}
