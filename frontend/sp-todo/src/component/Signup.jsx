import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import {userRegister} from '../Redux/signupAction'

class Signup extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            fullname:"",
            email:"",
            pword:""
        }
    }

    handleSignup = (e) => {
          e.preventDefault()
          const {email,pword,fullname} = this.state
          console.log(this.state.email,this.state.pword,this.state.fullname)
          const payload = {
              email:email,
              password:pword,
              fullname:fullname
          }
          this.props.userRegReq(payload)
    }
    render(){
        console.log(this.props)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="card mt-5">
                            <div className="card-header">
                                Please Register
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSignup}>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Enter Your Full Name" value={this.state.fullname} onChange={(e)=>{this.setState({fullname:e.target.value})}} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Enter Your Email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input name="pword" type="password" id="pword" className="form-control" placeholder="Enter Your Password" value={this.state.pword} onChange={(e)=>{this.setState({pword:e.target.value})}} required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {this.props.isLoading ? <div className="alert alert-warning" role="alert">Processing....</div>:""}
                    </div>
                    <div className="col-lg-12">
                        {this.props.error ? <div className="alert alert-danger" role="alert">Some Error...!</div>:""}
                    </div>
                    <div className="col-lg-12">
                        {this.props.message ? <div className="alert alert-success" role="alert">Congratulation Mr {this.props.message}, You have successfully registered, Please Login</div>:""}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading:state.signup.isLoading,
        error:state.signup.error,
        isAuth:state.signup.isAuth,
        message:state.signup.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userRegReq:(payload) => {
            dispatch(userRegister(payload))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)