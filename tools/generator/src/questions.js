module.exports = [
    {
      type: 'list',
      name: 'kind',
      message: 'What do you want to generate?',
      choices: [
        'Component',
        'Container',
        'Page'
      ],
      filter: (val) => val.toLowerCase().split(' ')[0],
    },
    {
      type: 'input',
      name: 'name',
      when: ({ kind }) => !['util', 'slice', 'hook'].includes(kind),
      message: 'Enter a name in PascalCase (like Sandwich or ChocolateBar):',
    },
    {
      type: 'input',
      name: 'name',
      when: ({ kind }) => ['util', 'slice'].includes(kind),
      message: 'Enter a name in camelCase (like normalizer or requestMaker):',
    },
    {
      type: 'input',
      name: 'name',
      when: ({ kind }) => kind === 'hook',
      message: 'Enter a name that begins with `use` in camelCase (like useAxios or useAuthStatus):',
    },
  ]
  