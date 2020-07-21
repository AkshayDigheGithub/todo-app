import React, { Component } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            dueDate: new Date(),
            priority: ""
        }
    }


    onChangeData = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value

        })
    }

    submitTask = () => {
        console.log(this.state);

    }

    handleChange = date => {
        this.setState({
            dueDate: date
        });
    };


    render() {
        const { showModal, handleClose } = this.props
        const { title, description, dueDate, priority } = this.state;
        return (
            <Modal show={showModal} >
                <Modal.Header >
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.submitTask}>
                        <Form.Group controlId="title">
                            <Form.Label>Tital</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="title"
                                onChange={this.onChangeData}
                                value={title} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                onChange={this.onChangeData}
                                value={description} />
                        </Form.Group>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="dueDate">
                                    <Form.Label>Due Date</Form.Label>
                                    <DatePicker
                                        selected={dueDate}
                                        onChange={this.handleChange}
                                        name="dueDate"
                                        dateFormat="MM/dd/yyyy"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="priority">
                                    <Form.Label>Priority select</Form.Label>
                                    <Form.Control as="select" onChange={this.onChangeData}>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="very high">Very High</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={this.submitTask}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalComponent;