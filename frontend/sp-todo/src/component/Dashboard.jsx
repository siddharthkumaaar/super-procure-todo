import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import styled from "./dashboard.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {addingTask,fetchingData,completeTask,deleteTask} from '../Redux/dashboardAction'
import EditPage from "./EditPage";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      addTask:"",
      filter:"",
      modalShow:false,
      item:""
    };
  }
  
  componentDidMount(){
    this.props.getData(this.props.userId)
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(this.state.addTask)
    let d = new Date()
    let date = d.getDate()
    let month = d.getMonth()+1
    let year = d.getFullYear()
    let fulldate = date+"/"+month+"/"+year
    // console.log(fulldate)
    const payload = {
        userid:this.props.userId,
        creationdate:fulldate,
        task:this.state.addTask,
        completed:false,
        duedate:"",
        priority:false,
        comment:""
    }
    this.props.newTaskAdding(payload)

  }

 handleComplete = (item) => {
   const payload = {
    id: item.id,
    userid: item.userid,
    creationdate: item.creationdate,
    task: item.task,
    completed: true,
    duedate: item.duedate,
    priority: item.priority,
    comment: item.comment
   }

   this.props.compTask(payload)
 }

 handleDelete = (id,userid) => {
    const payload = {
      id:id,
      userid:userid
    }
    this.props.deleteTask(payload)
 }

  render() {
    // console.log(this.props);
    const {todolist} = this.props
    return (
      // <div><h1>You are in Dashboard Now Mr.{this.props.name}</h1></div>
      <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <div className="conatiner">
              <div className="row">
                <div className="col-lg-12 mt-2">
                  <div className="card border-primary" id={styled.card1}>
                    <div className="card-title">Total Task</div>
                    <div className="card-body">{this.props.totalTask}</div>
                  </div>
                </div>
                <div className="col-lg-12 mt-4">
                  <div className="card border-danger" id={styled.card2}>
                    <div className="card-title">Non Completed Task</div>
                    <div className="card-body">{this.props.nonCompletedTask}</div>
                  </div>
                </div>
                <div className="col-lg-12 mt-4">
                  <div className="card border-success" id={styled.card3}>
                    <div className="card-title">Completed Task</div>
                    <div className="card-body">{this.props.completedTask}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-6">
            <div className="conatiner mt-3">
              <div className="row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    +
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Task..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={this.state.addTask}
                    onChange={(e)=>this.setState({addTask:e.target.value})}
                  />
                  <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
              {/* <div className="row">
                <div className="input-group input-group-sm mt-5 col-lg-3">
                  <input type="text" value={this.state.filter} onChange={(e)=>this.setState({filter:e.target.value})} className="form-control" placeholder="Filter" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
              </div> */}
              <div className="row mt-5">
                  {todolist && todolist.map(item=>{
                    return(
                <div className="col-lg-5" key={item.id}>
                  <div
                    className="card text-white bg-success mb-3"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-header">{item.creationdate}</div>
                    <div className="card-body">
                      <h5 className="card-title">{item.task}</h5>
                      <p className="card-text">
                        {item.comment}
                      </p>
                      {item.duedate ? <p>Due Date is {item.duedate}</p>:""}
                      
                      <div className="row">
                        <div className="col-lg-4">
                          {item.completed===false ?
                            <div><span className="badge badge-info" style={{cursor:"pointer"}}onClick={()=>this.handleComplete(item)}>Complete</span></div> :
                            <div><span className="badge badge-secondary">Completed</span></div>
                          }
                        </div>
                        <div className="col-lg-5">
                        {item.completed===false ?
                          <span className="badge badge-warning" style={{cursor:"pointer"}} onClick={()=>this.setState({modalShow:true,item:item})}>Add Sub Task</span>:
                          <span className="badge badge-secondary">Add Sub Task</span>}
                        </div>
                        <div className="col-lg-4">
                         
                          <span className="badge badge-danger" style={{cursor:"pointer"}} onClick={()=>this.handleDelete(item.id,item.userid)}>Delete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )})}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditPage item={this.state.item} show={this.state.modalShow} onHide={()=>this.setState({modalShow:false})}/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.login.userId,
    name: state.login.name,
    todolist:state.dashboard.userTodoList,
    totalTask:state.dashboard.totalTask,
    completedTask:state.dashboard.completedTask,
    nonCompletedTask:state.dashboard.nonCompletedTask
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newTaskAdding:(payload)=>{dispatch(addingTask(payload))},
        getData:(payload)=>{dispatch(fetchingData(payload))},
        compTask:(payload)=> {dispatch(completeTask(payload))},
        deleteTask:(payload)=>{dispatch(deleteTask(payload))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
