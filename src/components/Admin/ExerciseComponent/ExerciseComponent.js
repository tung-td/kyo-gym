import React, { useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import { request } from '../../../utils/axiosInstance';

const ExerciseComponent = () => {
  const navigate = useNavigate();

  // GET Exercise INFO
  const { user } = useAuth();
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    try {
      const res = await request.get('/exercise');
      setExerciseData(res);
    } catch (error) {
      console.log('Error fetching user information', error);
    }
  };

  const handleDeleteExercise = async (exerciseId) => {
    try {
      await request.remove(`/exercise/delete/${exerciseId}`);
      fetchData();
    } catch (error) {
      console.log('Error deleting exercise', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Instructions</TableCell>
            <TableCell>Target</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        {exerciseData.map((record) => (
          <TableRow key={record.exerciseId}>
            <TableCell>{record.exerciseName}</TableCell>
            <TableCell>{record.exerciseId}</TableCell>
            <TableCell>{record.exerciseDescription}</TableCell>
            <TableCell>{record.instructions}</TableCell>
            <TableCell>{record.target}</TableCell>
            <TableCell>
              <IconButton
                color='primary'
                onClick={() => navigate('/newexercise')}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                color='primary'
                onClick={() => navigate(`/editexercise/${record.exerciseId}`)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color='primary'
                onClick={() => handleDeleteExercise(record.exerciseId)}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
};

export default ExerciseComponent;
