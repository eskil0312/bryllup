import {portableText} from './blocks/portableText'
import {textImageBlock} from './blocks/textImageBlock'
import {frontPage} from './documents/frontPage'

const documents = [frontPage]
const blocks = [portableText(), textImageBlock]

export const schemaTypes = [...documents, ...blocks]
