import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isAuth:""
        }
    }


    render(){
        console.log(this.props)
        return(
        <div><h1>You are in Dashboard Now Mr.{this.props.name}</h1></div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userId:state.userId,
        name:state.name
    }
}

export default connect(mapStateToProps)(Dashboard)