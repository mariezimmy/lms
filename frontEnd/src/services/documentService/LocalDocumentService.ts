import IDocumentService from "./IDocumentService";
import Metadata from "../../model/Metadata";
import LitDocument from "../../model/LitDocument";

export default class LocalDocumentService implements IDocumentService {
  public async getDocuments(): Promise<LitDocument[]> {
	let documents = await(await fetch("http://localhost:3000/documents")).json()
	console.log(documents)
	documents = documents.map(document => {
		return new LitDocument(
			document._id,
			document.author,
			document.text,
			document.title
		)
	})
    return new Promise((resolve, reject) => resolve(documents));
  }
}


