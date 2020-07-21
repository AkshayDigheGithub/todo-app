import React, { Component } from 'react';
import TableComponent from './table.component';
import { Container, Button } from 'react-bootstrap';
import ModalComponent from './modal.component';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }

    }
    handleShow = (e) => {
        e.preventDefault()
        console.log("handle show clicked");
        this.setState({
            showModal: true
        })
    }
    handleClose = (e) => {
        e.preventDefault()
        console.log("handle close clicked");
        this.setState({
            showModal: false
        })
    }

    submitTask = (e) => {
        e.preventDefault()
        console.log("submit clicked", this.state);
    }
    render() {
        const { showModal } = this.state;
        return (
            <Container>
                {
                    showModal ? <ModalComponent
                        handleClose={this.handleClose}
                        handleShow={this.handleShow}
                        submitTask={this.submitTask}
                        showModal={showModal} /> : null
                }
                <div className="row justify-content-center">
                    <h1>TO DO APPLICATION</h1>
                </div>
                <TableComponent />
                <div className="row justify-content-center">
                    <Button className="btn btn-success" onClick={(e) => this.handleShow(e)}>Add Task +</Button>
                </div>

            </Container>
        );
    }
}

export default HomeComponent;