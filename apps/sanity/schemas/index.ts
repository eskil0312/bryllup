import {portableText} from './blocks/portableText'
import {profileBlock} from './blocks/profileBlock'
import {textImageBlock} from './blocks/textImageBlock'
import {aboutUsPage} from './documents/aboutUsPage'
import {frontPage} from './documents/frontPage'
import {programPage} from './documents/programPage'
import {questionsPage} from './documents/questionsPage'
import {vipPage} from './documents/vipPage'
import {wishListPage} from './documents/wishListPage'

const documents = [frontPage, vipPage, aboutUsPage, programPage, wishListPage, questionsPage]
const blocks = [portableText(), textImageBlock, profileBlock]

export const schemaTypes = [...documents, ...blocks]
