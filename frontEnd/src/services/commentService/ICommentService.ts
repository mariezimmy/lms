import DocComment from "../../model/DocComment";
import LitDocument from "../../model/LitDocument";

export default interface ICommentService {
	getComments(document: LitDocument): Promise<DocComment[]>;
}