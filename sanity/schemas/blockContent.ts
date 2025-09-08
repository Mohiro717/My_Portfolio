export default {
  title: 'ブロックコンテンツ',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'ブロック',
      type: 'block',
      styles: [
        {title: '通常', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: '引用', value: 'blockquote'},
      ],
      lists: [
        {title: '箇条書き', value: 'bullet'},
        {title: '番号リスト', value: 'number'}
      ],
      marks: {
        decorators: [
          {title: '太字', value: 'strong'},
          {title: '斜体', value: 'em'},
          {title: 'コード', value: 'code'}
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    },
    {
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '代替テキスト',
        }
      ]
    },
    {
      type: 'code',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'Python', value: 'python'},
          {title: 'JSON', value: 'json'}
        ]
      }
    }
  ]
}