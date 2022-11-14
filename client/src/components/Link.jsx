import React from 'react'

const Link = ({name, url}) => {
  return (
    <>
        <li>{name}: {url}</li>
    </>
  )
}

export default Link