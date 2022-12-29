import React from 'react'
import Heading from '../../components/heading/heading'

const Homepage = () => {
  return (
    <div>
        <Heading title="This is first heading" type="h1" headingStyles={{color: 'pink'}}/>
        <Heading title="This is second heading"/>
        <Heading title="This is second heading" type="h1"/>
        <hr />
    </div>
  )
}

export default Homepage