export default {
  name: 'category',
  title: 'カテゴリ',
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
      name: 'description',
      title: '説明',
      type: 'text',
      rows: 3
    },
    {
      name: 'color',
      title: 'カテゴリカラー',
      type: 'string',
      options: {
        list: [
          {title: 'ピンク', value: 'watercolor-pink'},
          {title: 'ブルー', value: 'watercolor-blue'},
          {title: 'グリーン', value: 'watercolor-green'},
          {title: 'イエロー', value: 'watercolor-yellow'},
          {title: 'パープル', value: 'watercolor-purple'}
        ],
        layout: 'radio'
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
}