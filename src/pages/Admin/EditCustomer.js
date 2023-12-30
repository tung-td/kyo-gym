import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { request } from '../../utils/axiosInstance';

const EditCustomer = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [dateOfBirth, setDayOfBirth] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const res = await request.get('/customer/list/' + id);
        setName(res.customerName);
        setDayOfBirth(res.dateOfBirth);
        setAddress(res.customerAddress);
        setPhone(res.customerPhone);
        setEmail(res.customerEmail);
      } catch (error) {
        console.log('Error fetching user information', error);
      }
    };

    if (user) {
      fetchExerciseData();
    }
  }, [user]);

  const onFinish = async () => {
    try {
      if (user) {
        const res = await request.patch('/customer/edit/' + id, {
          name,
          dateOfBirth,
          address,
          phone,
          email,
        });
        console.log('Exercise edited successfully', res.data);
        // navigate('/admin');
      }
    } catch (error) {
      console.log('Error editing exercise', error);
    }
  };

  return (
    <div>
      <div>
        <div className='pt-10 px-44 '>
          <h1>Create new Exercise</h1>
          <Form
            onFinish={onFinish}
            className='pt-6 max-w-2xl bg-gray-300'
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 16,
            }}
            layout='horizontal'
          >
            <Form.Item label='Name'>
              <Input.TextArea
                autoSize
                placeholder='Enter Exercise name'
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item label='Description'>
              <Input.TextArea
                autoSize
                placeholder='Enter Exercise name'
                value={dateOfBirth}
                required
                onChange={(e) => setDayOfBirth(e.target.value)}
              />
            </Form.Item>
            <Form.Item label='Body Part'>
              <Input.TextArea
                autoSize
                placeholder='Enter Exercise name'
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Item>
            <Form.Item label='Equipment'>
              <Input.TextArea
                autoSize
                placeholder='Enter Exercise name'
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Item>
            <Form.Item label='Instruction'>
              <Input.TextArea
                autoSize
                placeholder='Enter Exercise name'
                value={email}
                disabled
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item className='pl-[320px]'>
              <Button type='primary' htmlType=''>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
