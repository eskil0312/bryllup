import {portableText} from './blocks/portableText'
import {profileBlock} from './blocks/profileBlock'
import {textImageBlock} from './blocks/textImageBlock'
import {frontPage} from './documents/frontPage'
import {vipPage} from './documents/vipPage'

const documents = [frontPage, vipPage]
const blocks = [portableText(), textImageBlock, profileBlock]

export const schemaTypes = [...documents, ...blocks]
