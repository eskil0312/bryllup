import {StructureBuilder} from 'sanity/desk'
import {RiFileInfoLine, RiHome4Line, RiMiniProgramLine, RiVipCrown2Fill} from 'react-icons/ri'
import {frontPage} from '../schemas/documents/frontPage'
import {vipPage} from '../schemas/documents/vipPage'
import {aboutUsPage} from '../schemas/documents/aboutUsPage'
import {programPage} from '../schemas/documents/programPage'

const vipPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Vip side')
    .id('vipPage')
    .icon(RiVipCrown2Fill)
    .child(S.document().schemaType(vipPage.name).title('Vip side').documentId('VipPage'))

const aboutUsPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Om oss')
    .id('aboutUsPage')
    .icon(RiFileInfoLine)
    .child(S.document().schemaType(aboutUsPage.name).title('Om oss').documentId('AboutUsPage'))

const programPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Kjøreplan')
    .id('programPage')
    .icon(RiMiniProgramLine)
    .child(S.document().schemaType(programPage.name).title('Kjøreplan').documentId('Program'))

const frontPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Forside')
    .id('frontPage')
    .icon(RiHome4Line)
    .child(S.document().schemaType(frontPage.name).title('Forside').documentId('FrontPage'))

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Bryllup')
    .items([
      frontPageStructure(S),
      aboutUsPageStructure(S),
      vipPageStructure(S),
      programPageStructure(S),
    ])
