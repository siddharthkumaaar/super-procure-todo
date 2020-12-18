import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import {userlogIn} from '../Redux/actions'
import { Redirect } from 'react-router-dom';

class Login extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            email:"",
            pword:"",
            users:""
        }
    }

    handleLogin = (e) => {
          e.preventDefault()
          const {email,pword} = this.state
            const payload = {
                email:email,
                password:pword
            }

            this.props.loginRequest(payload)

    }

    render(){
        // const {users} = this.state
        // console.log(this.props)
        // this.setState({isAuth:this.props.isAuth})
        // console.log(this.props)
        if(this.props.userId==null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <div className="card mt-5">
                                <div className="card-header">
                                    Please Login
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleLogin}>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="email" id="email" name="email" className="form-control" placeholder="Enter Your Email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input name="pword" type="password" id="pword" className="form-control" placeholder="Enter Your Password" value={this.state.pword} onChange={(e)=>{this.setState({pword:e.target.value})}}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <Redirect to="/dashboard"/>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        userId:state.login.userId,
        isAuth:state.login.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest:(payload) =>{dispatch(userlogIn(payload))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)