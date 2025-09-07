import {StructureBuilder} from 'sanity/structure'

export const homeStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      ...S.documentTypeListItems().filter((listItem) => !['homePage'].includes(listItem.getId()!)),
    ])
