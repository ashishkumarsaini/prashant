import React from 'react'

const Heading = ({
    title,
    type,
    headingStyles = {},
}) => {

    switch(type){
        case 'h1': return <h1 style={{color: 'red',...headingStyles}}>{title}</h1>
        case 'h2': return <h2>{title}</h2>
        case 'h3': return <h3>{title}</h3>
        default: return <h4>{title}</h4>
    }

}

export default Heading