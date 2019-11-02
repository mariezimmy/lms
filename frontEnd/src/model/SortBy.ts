export default class SortBy {
	constructor(public endpoint: string, public description: string) { }

	public static TitleAZ: SortBy = new SortBy("title/ascending", "Title (A - Z)")
	public static TitleZA: SortBy = new SortBy("title/descending", "Title (Z - A)")
	public static AuthorAZ: SortBy = new SortBy("author/ascending", "Author (A - Z)")
	public static AuthorZA: SortBy = new SortBy("author/descending", "Author (Z - A)")
	public static CorrespondentAZ: SortBy = new SortBy("correspondent/ascending", "Correspondent (A - Z)")
	public static CorrespondentZA: SortBy = new SortBy("correspondent/descending", "Correspondent (Z - A)")
	public static DateNewestToOldest: SortBy = new SortBy("date/descending", "Date (Newest - Oldest)")
	public static DateOldestToNewest: SortBy = new SortBy("date/ascending", "Date (Oldest - Newest)")


}