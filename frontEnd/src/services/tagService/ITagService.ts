import LitDocument from "../../model/LitDocument";

export default interface ITagService {
    tagDocument(document: LitDocument, tag: string): Promise<LitDocument>;
}