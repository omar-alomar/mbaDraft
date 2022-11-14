import React from 'react'
import Header from '../components/Header'
import Link from '../components/Link'

const Links = () => {
  return (
    <>
    <div className="flex flex-col w-full">
      <Header Text="Links" />
      <div className="m-5">
        <Link name="FB" url="www.facebook.com" />
        <Link name="IG" url="www.instagram.com" />
          
      </div>
    </div>
    </>
  )
}

export default Links