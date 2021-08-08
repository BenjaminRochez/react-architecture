import React from 'react'

import __NAME__ from './__NAME__'

export default {
  title: 'Components/__NAME__',
  component: __NAME__,
}

function Template(args) {
  return <__NAME__ {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
