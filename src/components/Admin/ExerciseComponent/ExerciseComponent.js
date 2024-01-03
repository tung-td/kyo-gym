import React, { useEffect, useState } from 'react';
import styles from './ExerciseComponent.module.css';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import { request } from '../../../utils/axiosInstance';

const ExerciseComponent = () => {
  const navigate = useNavigate();

  // GET Exercise INFO
  const { user } = useAuth();
  const [exerciseData, setExerciseData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user, page, rowsPerPage]);

  const fetchData = async () => {
    try {
      const res = await request.get('/exercise');
      setExerciseData(res);
    } catch (error) {
      console.log('Error fetching exercise information', error);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper} className={styles.tab_container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Instructions</TableCell>
              <TableCell>Target</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exerciseData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((record) => (
              <TableRow
                key={record.exerciseId}
                hover
                onClick={() => navigate(`/editexercise/${record.exerciseId}`)}
              >
                <TableCell>{record.exerciseId}</TableCell>
                <TableCell>{record.exerciseName}</TableCell>
                <TableCell className={styles.descriptionCell}>{record.exerciseDescription}</TableCell>
                <TableCell className={styles.instructionsCell} >{record.instructions}</TableCell>
                <TableCell>{record.target}</TableCell>
                <TableCell>
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
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[7, 14, 25]}
          component="div"
          count={exerciseData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default ExerciseComponent;
