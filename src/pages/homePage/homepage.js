import React from 'react'
import Heading from '../../components/heading/heading'

const Homepage = () => {
  return (
    <div>
        <Heading title="HomePage Component" type="h1"/>
        <Heading title="This is first heading" type="h3"/>
        <Heading title="This is second heading"/>
        <Heading title="This is second heading" type="h3"/>
        <hr />
    </div>
  )
}

export default Homepage