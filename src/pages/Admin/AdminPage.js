import React, { useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { Button, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import ExerciseComponent from '../../components/Admin/ExerciseComponent/ExerciseComponent';
import CustomerComponent from '../../components/Admin/CustomersComponent/CustomerComponent';
import styles from './AdminPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo_kyo_gym.png'
import { Link } from 'react-router-dom';
const AdminPage = () => {
  const [activeKey, setActiveKey] = useState('exercises');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>
          <Tab.Container defaultActiveKey='exercises' onSelect={handleSelect}>
            <Row noGutters className={styles.flex_wrap}>
              <Col sm={3} className={styles.sidebar}>
                <div>
                  <Link to='/'><img src={logo} alt='logo' className={styles.kyoRoundLogo1} /></Link>
                </div>
                <Nav>
                  <div className={`${styles.sidebar_text} ${activeKey === 'exercises' ? styles.active_sidebar_text : ''}`}>
                    <Nav.Link eventKey='exercises'>
                      <FontAwesomeIcon icon={faClapperboard} className={styles.sidebar_icon} />
                      Exercises
                    </Nav.Link>
                  </div>

                  <div className={`${styles.sidebar_text} ${activeKey === 'customers' ? styles.active_sidebar_text : ''}`}>
                    <Nav.Link eventKey='customers' >
                      <FontAwesomeIcon icon={faCircleUser} className={styles.sidebar_icon} />
                      Customers
                    </Nav.Link>
                  </div>
                </Nav>
              </Col>
              <Col sm={9} style={{ padding: '7.5rem 250px 50px 13px' }}>
                <Tab.Content>
                  <h4 className={styles.tab_title}>{activeKey}</h4>
                  <Tab.Pane className='bg-slate-300' eventKey='exercises'>
                    <Button className={styles.btn_add} onClick={() => navigate('/newexercise')}>
                      <IconButton
                        style={{ color: 'white', padding: 'unset' }}
                      >
                        <AddIcon />
                      </IconButton>
                      Exercise
                    </Button>
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
