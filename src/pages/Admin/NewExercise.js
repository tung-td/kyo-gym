import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { request } from '../../utils/axiosInstance';

const NewExercise = () => {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [equipment, setEquipment] = useState('');
  const [instruction, setInstruction] = useState('');

  const onFinish = async () => {
    try {
      if (user) {
        const res = await request.post('/exercise/create', {
          name,
          description,
          bodyPart,
          equipment,
          instruction,
        });
        console.log('Exercise created successfully', res.data);
        // navigate('/admin');
      }
    } catch (error) {
      console.log('Error creating exercise', error);
    }
  };

  return (
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
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item label='Body Part'>
          <Input.TextArea
            autoSize
            placeholder='Enter Exercise name'
            value={bodyPart}
            required
            onChange={(e) => setBodyPart(e.target.value)}
          />
        </Form.Item>
        <Form.Item label='Equipment'>
          <Input.TextArea
            autoSize
            placeholder='Enter Exercise name'
            value={equipment}
            required
            onChange={(e) => setEquipment(e.target.value)}
          />
        </Form.Item>
        <Form.Item label='Instruction'>
          <Input.TextArea
            autoSize
            placeholder='Enter Exercise name'
            value={instruction}
            required
            onChange={(e) => setInstruction(e.target.value)}
          />
        </Form.Item>
        <Form.Item className='pl-[320px]'>
          <Button type='primary' htmlType=''>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewExercise;
