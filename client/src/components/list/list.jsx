import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import './list.css'
const list = () => {
  return (
    <div className='Container'>
    <Container >
      <Row className="my-4">
        <Col>
          <h1>Tasks Manegement</h1>
          <Button variant="primary">Add New tasks</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Activity</th>            
                <th>Checklist</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Date</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Activity 1</td>               
                <td>Write newsletter</td>
                <td><span className="badge bg-success">Done</span></td>
                <td>High</td>
                <td>Mar 25</td>
               
              </tr>
              <tr>
                <td>Activity 2</td>           
                <td>Make an offer</td>
                <td><span className="badge bg-warning">In progress</span></td>
                <td>Medium</td>
                <td>Mar 30</td>
               
              </tr>
              <tr>
                <td>Activity 3</td>              
                <td>Features update</td>
                <td><span className="badge bg-danger">Stuck</span></td>
                <td>High</td>
                <td>Apr 5</td>
                
              </tr>
              <tr>
                <td>Activity 4</td>        
                <td>Print labels</td>
                <td><span className="badge bg-success">Done</span></td>
                <td>High</td>
                <td>May 18</td>
               
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default list;