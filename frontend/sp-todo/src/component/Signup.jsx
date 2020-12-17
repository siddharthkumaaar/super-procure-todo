import React from 'react'
import { Component } from 'react';

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
          console.log(this.state.email,this.state.pword,this.state.fullname)  
    }
    render(){
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
                                        <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Enter Your Full Name" value={this.state.fullname} onChange={(e)=>{this.setState({fullname:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Enter Your Email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input name="pword" type="password" id="pword" className="form-control" placeholder="Enter Your Password" value={this.state.pword} onChange={(e)=>{this.setState({pword:e.target.value})}}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        )
    }
}

export default Signup