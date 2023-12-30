import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import ExerciseComponent from '../../components/Admin/ExerciseComponent/ExerciseComponent';
import CustomerComponent from '../../components/Admin/CustomersComponent/CustomerComponent';

const AdminPage = () => {
  return (
    <div>
      <div className='text-center text-5xl font-bold p-4 bg-gray-200'>
        Admin Page
      </div>
      <div>
        <div className='px-44 pt-4 bg-gray-200 h-screen'>
          <Tab.Container defaultActiveKey='exercises'>
            <Row>
              <Col sm={3} className='bg-slate-100 pt-4'>
                <Nav variant='pills' className='flex-column '>
                  <Nav.Item>
                    <Nav.Link eventKey='exercises'>Exercises</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='customers'>Customers</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane className='bg-slate-300' eventKey='exercises'>
                    <ExerciseComponent />
                  </Tab.Pane>
                  <Tab.Pane className='bg-slate-300' eventKey='customers'>
                    <CustomerComponent />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
