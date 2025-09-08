import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'mohiro-portfolio',
  title: 'Mohiro Portfolio Blog',

  projectId: 'kuw8yakr',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('管理画面')
          .id('root')
          .items([
            S.listItem()
              .id('post')
              .title('ブログ投稿')
              .child(
                S.documentTypeList('post')
                  .title('ブログ投稿')
              ),
            S.listItem()
              .id('category')
              .title('カテゴリ')
              .child(
                S.documentTypeList('category')
                  .title('カテゴリ')
              ),
            S.listItem()
              .id('author')
              .title('著者')
              .child(
                S.documentTypeList('author')
                  .title('著者')
              ),
            S.divider(),
            // その他のドキュメント
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['post', 'category', 'author'].includes(listItem.getId() as string)
            ),
          ])
    }),
    visionTool(),
    codeInput()
  ],

  schema: {
    types: schemaTypes,
  },
})
