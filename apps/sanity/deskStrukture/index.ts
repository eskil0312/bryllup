import { StructureBuilder } from "sanity/desk";
import { RiHome4Line } from 'react-icons/ri';
import { frontPage } from "../schemas/documents/frontPage";

const frontPageStructure = (S: StructureBuilder) =>
    S.listItem()
        .title('Forside')
        .id("frontPage")
        .icon(RiHome4Line)
        .child(
            S.document()
                .schemaType(frontPage.name)
                .title("Forside")
                .documentId("FrontPage"),
        );

export const deskStructure = (S: StructureBuilder) =>
    S.list()
        .title('Bryllup')
        .items([
            frontPageStructure(S)
        ])