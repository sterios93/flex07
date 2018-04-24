import React from 'react'
import MainNav from './../common/mainNav/MainNav'
import Where from './../homePage/where/Where'

let WhereArePage = (props) => {
  return (
    <section className='mb-5'>
      <div className='wrapper'>
        <MainNav linkColor={'text-dark'} />
      </div>
      <div className='row-fluid'>
        <div className='col p-0'>
          <Where mapCol={'col-12'} textCol={'col-12'} />
        </div>
      </div>
    </section>
  )
}

export default WhereArePage
