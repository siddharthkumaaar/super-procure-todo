import React from "react";
import { Component } from "react";
import { Modal, Button, Row, Col, Container, Form } from "react-bootstrap";
import {connect} from 'react-redux'
import {addsubtask} from '../Redux/dashboardAction'

class EditPage extends Component{
  constructor(props){
      super(props);
      this.state={
          subTask:"",
          dueDate:""
      }
  }

  handleSubmit = () => {
    // console.log(this.props)
    const {item,addSubTask} = this.props
    const {subTask,dueDate} = this.state
    const payload = {
      id: item.id,
      userid: item.userid,
      creationdate: item.creationdate,
      task: item.task,
      completed: item.completed,
      duedate: dueDate,
      priority: item.priority,
      comment: subTask
    }
    addSubTask(payload)
  
  }

  render(){
    // console.log(this.props)
    const {item} = this.props
  return (
    <>
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {item.task}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={6}>
                <Form.Label>Add Sub Task</Form.Label>
                <Form.Control value={this.state.subTask} onChange={(e)=>this.setState({subTask:e.target.value})} type="text" placeholder="Type your sub task...." />
              </Col>
              <Col lg={6}>
                <Form.Label>Due Date</Form.Label>
                <Form.Control value={this.state.dueDate} onChange={(e)=>this.setState({dueDate:e.target.value})} type="text" placeholder="Due date in dd/mm/yyyy format" />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col lg={6}>
                <Row>
                  
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col>
                    <Button className="btn btn-block" onClick={this.handleSubmit}>
                        submit
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}
}
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSubTask:(payload)=>{dispatch(addsubtask(payload))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditPage);