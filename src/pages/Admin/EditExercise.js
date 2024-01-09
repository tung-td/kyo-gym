import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import { useAuth } from '../../AuthContext';
import { request } from '../../utils/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EditExercise.module.css';

const EditExercise = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [bodyPart, setBodyPart] = useState('');
  const [equipment, setEquipment] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [target, setTarget] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const res = await request.get(`/exercise/${id}`);
        setBodyPart(res.bodyPart);
        setEquipment(res.equipment);
        setExerciseDescription(res.exerciseDescription);
        setExerciseName(res.exerciseName);
        setInstructions(res.instructions);
        setTarget(res.target);
        setVideoUrl(res.videoUrl);
      } catch (error) {
        console.log('Error fetching exercise information', error);
      }
    };

    if (user) {
      fetchExerciseData();
    }
  }, [id, user]);

  const onFinish = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        const res = await request.put(`/exercise/edit/${id}`, {
          bodyPart,
          equipment,
          exerciseDescription,
          exerciseName,
          instructions,
          target,
          videoUrl,
        });

        if (res.message === 'The exercise has successfully edited!!') {
          navigate('/admin');
        }
      }
    } catch (error) {
      console.log('Error editing exercise', error);
    }
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h5" className={styles.title}>
        Edit Exercise
      </Typography>
      <form onSubmit={onFinish}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={styles.formItem}>
            <TextField
              fullWidth
              label="Body Part"
              variant="outlined"
              value={bodyPart}
              onChange={(e) => setBodyPart(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={styles.formItem}>
            <TextField
              fullWidth
              label="Equipment"
              variant="outlined"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={styles.formItem}>
            <TextField
              fullWidth
              label="Exercise Description"
              variant="outlined"
              multiline
              rows={3}
              value={exerciseDescription}
              onChange={(e) => setExerciseDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={styles.formItem}>
            <TextField
              fullWidth
              label="Exercise Name"
              variant="outlined"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={styles.formItem}>
            <TextField
              fullWidth
              label="Instructions"
              variant="outlined"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={styles.formItem}>
            <TextField
              fullWidth
              label="Target"
              variant="outlined"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={styles.formItem}>
            <TextField
              fullWidth
              label="Video URL"
              variant="outlined"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth className={styles.submitButton}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default EditExercise;