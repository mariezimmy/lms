import Metadata from "./Metadata";

export default class LitDocument {
  constructor(
    public uniqueID: number,
    public title?: string,
    public text?: string,
    public author?: string,
    public image?: string,
    public metadata?: Metadata,
    public tags?: string[],
    public correspondent?: string,
    public day?: number,
    public month?: number,
    public year?: number

  ) { }
}
