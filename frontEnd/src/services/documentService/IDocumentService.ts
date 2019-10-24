import LitDocument from "../../model/LitDocument";
import SortBy from "../../model/SortBy";

export default interface IDocumentService {
	getDocuments(): Promise<LitDocument[]>;
	sortDocuments(sortBy: SortBy): Promise<LitDocument[]>;
	searchDocuments(query: string): Promise<LitDocument[]>;
}