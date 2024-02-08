import {StructureBuilder} from 'sanity/desk'
import {
  RiFileInfoLine,
  RiGiftFill,
  RiHome4Line,
  RiMiniProgramLine,
  RiVipCrown2Fill,
  RiHomeLine,
  RiQuestionLine,
} from 'react-icons/ri'
import {frontPage} from '../schemas/documents/frontPage'
import {vipPage} from '../schemas/documents/vipPage'
import {aboutUsPage} from '../schemas/documents/aboutUsPage'
import {programPage} from '../schemas/documents/programPage'
import {wishListPage} from '../schemas/documents/wishListPage'
import {sleepoverPage} from '../schemas/documents/sleepoverPage'
import {questionsPage} from '../schemas/documents/questionsPage'

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

const wishListPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Ønskeliste')
    .id('wishListPage')
    .icon(RiGiftFill)
    .child(
      S.document().schemaType(wishListPage.name).title('Ønskeliste').documentId('WishListPage'),
    )

const sleepoverPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Opphold')
    .id('sleepoverPage')
    .icon(RiHomeLine)
    .child(S.document().schemaType(sleepoverPage.name).title('Opphold').documentId('SleepoverPage'))

const questionsPageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Q&A')
    .id('questionsPage')
    .icon(RiQuestionLine)
    .child(S.document().schemaType(questionsPage.name).title('Q&A').documentId('QuestionsPage'))

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
      wishListPageStructure(S),
      sleepoverPageStructure(S),
      questionsPageStructure(S),
    ])
