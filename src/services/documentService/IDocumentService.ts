import LitDocument from "../../model/LitDocument";

export default interface IDocumentService {
	getDocuments(): Promise<LitDocument[]>;
}