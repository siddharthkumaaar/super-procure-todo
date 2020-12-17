import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {logIn} from '../Redux/actions'
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
          const {email,pword,users} = this.state
        //   console.log(this.props)
            for(let i=0; i<users.length; i++)
            {
                if(users[i].email===email && users[i].password===pword)
                {
                    this.props.logIn(users[i].id,users[i].full_name)
                }
            }

    }

    componentDidMount(){
        axios({
            url:"http://localhost:3001/users",
            method:"get"
        })
        .then(res=>res.data)
        .then(res=>{
            this.setState({
                users:res
            })

        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        // const {users} = this.state
        // console.log(this.props)
        console.log(this.props)
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
        userId:state.userId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logIn:(id,name) =>{dispatch(logIn(id,name))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)