import React from 'react'

import Sandwich from './Sandwich'

export default {
  title: 'Components/Sandwich',
  component: Sandwich,
}

function Template(args) {
  return <Sandwich {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
