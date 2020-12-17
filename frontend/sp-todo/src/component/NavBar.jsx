import React from "react";
import { Component } from "react";
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../Redux/actions'
 
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogout = () => {
    this.props.logOut(null,"")
  }

  render() {
    if(this.props.userId===null)
    {
      return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
          <Navbar.Brand href="#home">Super Procure Todo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link><Link to="/login"><span className="text-white">Login</span></Link></Nav.Link>
              <Nav.Link><Link to="/signup"><span className="text-white">Sign Up</span></Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      
      );
    }else{
      return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
          <Navbar.Brand href="#home">Super Procure Todo</Navbar.Brand>
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
      userId:state.userId,
      name:state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      logOut:(id,name) =>{dispatch(logOut(id,name))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
