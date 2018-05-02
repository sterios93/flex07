import React from 'react'

let Footer = () => {
  return (
    <footer className='d-flex flex-column'>
      <div className='copyright-footer d-flex justify-content-center'>
        <div className='wrapper'>
          <div className='d-flex flex-column flex-sm-row align-items-center justify-content-between'>
            <ul className='navbar-nav w-25 flex-row justify-content-center justify-content-lg-start'>
              <li className='nav-item '>
                <a className='nav-link' href='https://www.facebook.com/flex07/' target='_blanc'>
                  <i className='fa fa-facebook text-light' aria-hidden='true' />
                  <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item pl-4'>
                <a className='nav-link' href='https://www.instagram.com/flex.07/' target='_blanc'>
                  <i className='fa fa-instagram text-light' aria-hidden='true' />
                </a>
              </li>
            </ul>
            <span className='text-light align-self-center text-center' style={{fontSize: '10px' }}>
              <i className='fa fa-copyright' aria-hidden='true' />
              Copyright 2018 - Team Flex 07 | Created by Sterios Taskudis
              </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
