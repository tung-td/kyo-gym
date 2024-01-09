import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import { useAuth } from '../../AuthContext';
import { request } from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const NewExercise = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [bodyPart, setBodyPart] = useState('');
  const [equipment, setEquipment] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [target, setTarget] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const onFinish = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        const res = await request.post('/exercise/create', {
          bodyPart,
          equipment,
          exerciseDescription,
          exerciseName,
          instructions,
          target,
          videoUrl,
        });

        if (res.message == 'New exercise successfully created!') {
          navigate('/admin');
        }
      }
    } catch (error) {
      console.log('Error creating exercise', error);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" align="center">
        Create new Exercise
      </Typography>
      <form onSubmit={onFinish}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Body Part"
              variant="outlined"
              value={bodyPart}
              onChange={(e) => setBodyPart(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Equipment"
              variant="outlined"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Exercise Description"
              variant="outlined"
              value={exerciseDescription}
              onChange={(e) => setExerciseDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Exercise Name"
              variant="outlined"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Instructions"
              variant="outlined"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Target"
              variant="outlined"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Video URL"
              variant="outlined"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default NewExercise;
