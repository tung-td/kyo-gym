import React from 'react';
import { request } from '../../utils/axiosInstance';
import { useAuth } from '../../AuthContext'
import {useEffect, useState} from 'react'
// import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
const CustomerComponent = () => {
  const { user } = useAuth();
const [userData, setUserData] = useState([]);
useEffect(() => {
    const fetchUserData = async () => {
        try {
            const res = await request.get('/customer/list')
            setUserData(res)
            
        } catch (error) {
            console.log("Error fetching user information", error);
        }
    }

    if (user) {
        fetchUserData();
    }
    
}, [user])

console.log(userData)
  return (
    <h1>sdfsdfsds</h1>)
    // <div>
    //   <Table responsive striped bordered hover>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th>Phone</th>
    //         <th>Address</th>
    //         <th>Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>{TableRow}</tr>
    //     </tbody>
    //   </Table>
    // </div>
    
    // <div>
    //   <h1>Customer Component</h1>
    //   {data && data.length > 0 ? (
    //     <ul>
    //       {data.map((item) => (
    //         <li key={item.id}>{item.name}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>Không có dữ liệu</p>
    //   )}
    // </div>
  
};

export default CustomerComponent;
