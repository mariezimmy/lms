export default class DocComment {
  constructor(
	public uniqueID: number,
	public isWholeDocComment: boolean,
    public startIdx: number,
    public endIdx: number,
    public author: string,
    public body: string,
  ) {}
}
