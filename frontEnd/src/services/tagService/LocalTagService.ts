import ITagService from "./ITagService";
import LitDocument from "../../model/LitDocument";

export default class LocalTagService implements ITagService {
    public async tagDocument(document: LitDocument, tag: string): Promise<LitDocument> {
        let updatedDoc = await (await fetch(
            "http://localhost:3000/tag/" + document.uniqueID.toString() + "/" + tag, {
            method: 'POST', mode: 'no-cors', headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })).json();
        console.log(document);
        updatedDoc = new LitDocument(
            document.uniqueID,
            document.author,
            document.text,
            document.title,
            undefined,
            undefined,
            document.tags
        );

        return new Promise((resolve, reject) => resolve(updatedDoc));
    }
}