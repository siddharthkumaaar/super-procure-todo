import React from "react";
import { Component } from "react";
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../Redux/actions'
 
class NavBar extends Component {
  

  handleLogout = () => {
    
    this.props.logoutRequest()
  }

  
  render() {
    const isAuth = JSON.parse(localStorage.getItem("user"))
    if(this.props.isAuth===false || isAuth.auth===false)
    {
      return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
          <Navbar.Brand href="#home">My Todo Task</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/"><span className="text-white m-3">Home</span></Link>
              <Link to="/login"><span className="text-white m-3">Login</span></Link>
              <Link to="/signup"><span className="text-white m-3">Sign Up</span></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
      );
    }else{
      return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
          <Navbar.Brand>My Todo Task</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link><Link to="/"><span className="text-white" onClick={this.handleLogout}>Log Out</span></Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return{
      userId:state.login.userId,
      name:state.login.name,
      isAuth:state.login.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      logoutRequest:(payload) =>{dispatch(logOut(payload))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
