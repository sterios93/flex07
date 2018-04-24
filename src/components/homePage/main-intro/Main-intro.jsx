import React from 'react'
import MainNav from './../../common/mainNav/MainNav'
import Jumbotron from './Jumbotron'

let MainIntro = (props) => {
  return (
    <section className='main-intro'>
      <div className='wrapper'>
        <div className='row d-flex justify-content-end flex-column'>
          <MainNav linkColor={'text-white'} buttonMenuColorMobileSize={'btnClrMobile'} />
          <Jumbotron display={'d-none d-sm-block'}/>
        </div>
      </div>
    </section>
  )
}

export default MainIntro
