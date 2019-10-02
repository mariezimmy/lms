export default class SortBy {
	constructor(public endpoint: string) {}

	public static TitleAZ:SortBy = new SortBy("title/ascending")
	public static TitleZA:SortBy = new SortBy("title/descending")
	public static AuthorAZ:SortBy = new SortBy("author/ascending")
	public static AuthorZA:SortBy = new SortBy("author/descending")
}