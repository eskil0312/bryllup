import {StructureBuilder} from 'sanity/desk'
import {RiHome4Line} from 'react-icons/ri'
import {frontPage} from '../schemas/documents/frontPage'
import {vipPage} from '../schemas/documents/vipPage'
import {aboutUsPage} from '../schemas/documents/aboutUsPage'

const vipPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Vip side')
    .id('vipPage')
    .icon(RiHome4Line)
    .child(S.document().schemaType(vipPage.name).title('Vip side').documentId('VipPage'))

const aboutUsPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Om oss')
    .id('aboutUsPage')
    .icon(RiHome4Line)
    .child(S.document().schemaType(aboutUsPage.name).title('Om oss').documentId('AboutUsPage'))

const frontPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Forside')
    .id('frontPage')
    .icon(RiHome4Line)
    .child(S.document().schemaType(frontPage.name).title('Forside').documentId('FrontPage'))

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Bryllup')
    .items([frontPageStructure(S), aboutUsPageStructure(S), vipPageStructure(S)])
