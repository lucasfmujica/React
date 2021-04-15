import React from 'react'
import styled from 'styled-components'
import './footer.css'

function Footer() {
  return (
    <FooterContainer className='main-footer'>
      <div className='footer-middle'>
        <div className='container footerContainer'>
          <div className='row'>
            {/* Column 1 */}
            <div className='col-md-3 col-sm-6'>
              <a href='/'>
                <h4>Home</h4>
              </a>
            </div>
            {/* Column 2 */}
            <div className='col-md-3 col-sm-6'>
              <a href='/'>
                <h4>Productos</h4>
              </a>
              <ul className='list-unstyled'>
                <li>
                  <a href='/Category/Computers'> Computers</a>
                </li>
                <li>
                  <a href='/Category/Phones'> Phones</a>
                </li>
                <li>
                  <a href='/Category/Tablets'> Tablets</a>
                </li>
                <li>
                  <a href='/Category/Monitor'> Monitor</a>
                </li>
                <li>
                  <a href='/Category/Mouse'> Mouse</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className='col-md-3 col-sm-6'>
              <a href='/'>
                <h4>Nosotros</h4>
              </a>
            </div>
            {/* Column 4 */}
            <div className='col-md-3 col-sm-6'>
              <a href='/'>
                <h4>Contacto</h4>
              </a>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className='footer-bottom'>
            <p className='text-xs-center'>
              &copy;{new Date().getFullYear()} Coral Byte - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}
export default Footer

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`
