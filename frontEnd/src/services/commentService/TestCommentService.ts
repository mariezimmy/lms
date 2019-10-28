import DocComment from "../../model/DocComment";
import LitDocument from "../../model/LitDocument";
import ICommentService from "./ICommentService";

export default class TestCommentService implements ICommentService {
	public async getComments(document: LitDocument): Promise<DocComment[]> {
		let comments: DocComment[] = [
			new DocComment(
				0, false, 10, 15, "EstemedAcademic1", "This part was my favorite!"
			),
			new DocComment(
				0, false, 22, 23, "Researcher667", "Gosh, I love the well executed enjambment here!"
			),
			new DocComment(
				0, false, 43, 60, "LitLuvr", "This is actually a missprint, it should read (unintelligable)"
			),
			new DocComment(
				0, true, -1, -1, "Dr. Margarethe Schneider", "Fun fact, the 1907 edition I had as a child was bound in sheep leather!"
			),
			new DocComment(
				0, true, -1, -1, "FictionFan", "A thrilling read"
			),
		];

		return new Promise((resolve, reject) => resolve(comments));
	}
}
