import DocComment from "../../model/DocComment";
import LitDocument from "../../model/LitDocument";
import ICommentService from "./ICommentService";

export default class LocalCommentService implements ICommentService {
	public async getComments(document: LitDocument): Promise<DocComment[]> {
		let comments = await (await fetch(
			"http://localhost:3000/", { mode: 'no-cors' })).json();
		console.log(comments);
		comments = null; //TODO BE PERSON
		return new Promise((resolve, reject) => resolve(comments));
	}
}
