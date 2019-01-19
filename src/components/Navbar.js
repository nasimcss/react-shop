import React, { Component } from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
import ButtonContainer from "../components/Button"
import styled from "styled-components"

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
    
    <Link to="/">
      <img src={logo} alt="shop logo" className="mylogo img-fluid"/>
    </Link>
    <ul className="navbar-nav align-items-center">
    <li className="nav-item ml-5">
    <Link to = "/" className="nav-link">
    Products
    </Link>
    </li>
    </ul>
    <Link to ="/cart" className="ml-auto">
    <ButtonContainer>
      <span className="mr-2"><i className="fas fa-cart-plus"/></span>   
      my cart
    </ButtonContainer>
    </Link>    
      </NavWrapper>

      // <div>
        
      //   <h3>Hello from Navbar</h3>
      //   {/* https://www.iconfinder.com/icons/3401824/computer_essential_web_icon */}
      // </div>
    )
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color:var(--mainWhite) !important;
  font-size:1.3rem;
  text-transform:uppercase !important;
}
`

export default Navbar
