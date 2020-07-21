import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import EditModalComponent from './edit.task';
const task = [
    { title: "title1", description: "description1", priority: "high", created: "18/07/2020", dueDate: "18/07/2020" },
    { title: "title2", description: "description2", priority: "low", created: "18/07/2020", dueDate: "18/07/2020" },
    { title: "title3", description: "description3", priority: "medium", created: "18/07/2020", dueDate: "18/07/2020" }
]

class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editClick: false
        }
    }

    editClick = (e) => {
        e.preventDefault()
        this.setState({
            editClick: true
        })
    }

    taskMap = (task) => {
        return task.map((t, index) => {
            let { title, description, priority, created, dueDate } = t
            return <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{priority}</td>
                <td>{created}</td>
                <td>{dueDate}</td>
                <td>
                    <button className="btn btn-sm btn-info" onClick={this.editClick}>Update</button>&nbsp;
                    <button className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        })
    }


    render() {
        const { editClick } = this.state;

        return (
            <>
                {
                    editClick ? <EditModalComponent editClick={editClick} /> : null
                }
                < Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>created At</th>
                            <th>Due Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.taskMap(task)}
                    </tbody>
                </Table >
            </>
        );
    }
}

export default TableComponent;