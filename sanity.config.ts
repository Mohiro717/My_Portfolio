import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'

import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'mohiro-portfolio',
  title: 'Mohiro Portfolio Blog',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id_here',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('管理画面')
          .items([
            S.listItem()
              .title('ブログ投稿')
              .child(
                S.documentTypeList('post')
                  .title('ブログ投稿')
                  .filter('_type == "post"')
              ),
            S.listItem()
              .title('カテゴリ')
              .child(
                S.documentTypeList('category')
                  .title('カテゴリ')
                  .filter('_type == "category"')
              ),
            S.listItem()
              .title('著者')
              .child(
                S.documentTypeList('author')
                  .title('著者')
                  .filter('_type == "author"')
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