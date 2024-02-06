import {portableText} from './blocks/portableText'
import {profileBlock} from './blocks/profileBlock'
import {textImageBlock} from './blocks/textImageBlock'
import {aboutUsPage} from './documents/aboutUsPage'
import {frontPage} from './documents/frontPage'
import {vipPage} from './documents/vipPage'

const documents = [frontPage, vipPage, aboutUsPage]
const blocks = [portableText(), textImageBlock, profileBlock]

export const schemaTypes = [...documents, ...blocks]
