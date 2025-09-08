export default {
  name: 'seo',
  title: 'SEO設定',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'メタタイトル',
      type: 'string',
      description: '検索結果に表示されるタイトル（60文字以内推奨）',
      validation: (Rule: any) => Rule.max(60)
    },
    {
      name: 'metaDescription',
      title: 'メタ説明文',
      type: 'text',
      rows: 3,
      description: '検索結果に表示される説明文（160文字以内推奨）',
      validation: (Rule: any) => Rule.max(160)
    },
    {
      name: 'metaKeywords',
      title: 'キーワード',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      description: 'SEO用キーワード（カンマ区切り）'
    },
    {
      name: 'ogImage',
      title: 'OG画像',
      type: 'image',
      description: 'SNSシェア用の画像（1200x630px推奨）',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'noIndex',
      title: '検索エンジンから除外',
      type: 'boolean',
      description: 'チェックすると検索結果に表示されません'
    }
  ],
  
  preview: {
    select: {
      title: 'metaTitle',
      subtitle: 'metaDescription'
    }
  }
}