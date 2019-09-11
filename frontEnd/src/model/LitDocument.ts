import Metadata from "./Metadata";

export default class LitDocument {
	constructor(
		public uniqueID: number,
		public path: string,
		public title?: string,
		public text?: string,
		public author?: string,
		public metadata?: Metadata,
	) {	}
}