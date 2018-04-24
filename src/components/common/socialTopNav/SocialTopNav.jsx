import React from 'react'

let SocialTopNav = (props) => {
  return (
    <header className='d-flex flex-column'>
      <section className='social-nav-top'>
        <div className='wrapper'>
          <div className=' d-flex flex-row justify-content-between p-1'>
            <div className='d-flex flex-column flex-sm-row justify-content-center'>
              {/* <a className='text-white p-0 p-sm-1 mb-0' href='tel:+359-87778-4991'>
                <span><i className='fa fa-mobile' aria-hidden='true' /> +359-87778-4991</span>
              </a> */}
              <a className='text-white p-0 p-sm-1 mb-0' href="mailto:Fitflex07@gmail.com">
                <span>
                  <i className='fa fa-envelope' aria-hidden='true' /> Fitflex07@gmail.com</span>
              </a>
            </div>
            <div className='d-flex align-items-center'>
              <a className='text-white' href='https://www.facebook.com/flex07/' target='_blanc'>
                <span><i className='fa fa-facebook-official' aria-hidden='true' /></span>
              </a>
              <a className='text-white' href='https://www.instagram.com/flex.07/' target='_blanc'>
                <span>
                  <i className='fa fa-instagram' aria-hidden='true' />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default SocialTopNav
