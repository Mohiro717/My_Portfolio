export default {
  name: 'post',
  title: 'ブログ投稿',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'タイトル',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: '抜粋',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(200)
    },
    {
      name: 'mainImage',
      title: 'メイン画像',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: '代替テキスト',
          type: 'string'
        }
      ]
    },
    {
      name: 'categories',
      title: 'カテゴリ',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'tags',
      title: 'タグ',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: '著者',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'body',
      title: '本文',
      type: 'blockContent',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'featured',
      title: '注目記事',
      type: 'boolean',
      description: 'トップページで強調表示する'
    },
    {
      name: 'seo',
      title: 'SEO設定',
      type: 'seo'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt'
    },
    prepare(selection: any) {
      const {author, date} = selection
      return {
        ...selection,
        subtitle: `${author} - ${new Date(date).toLocaleDateString('ja-JP')}`
      }
    }
  },

  orderings: [
    {
      title: '公開日（新しい順）',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'タイトル順',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ]
}