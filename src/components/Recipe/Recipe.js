import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from '@mui/material';

const Recipe = ({ meals }) => {
    return (
        <div>
            {meals?.map((meal, index) => (
                <TableContainer key={index} component={Paper} style={{ width: '99%', padding: '18px' }}>
                    <Typography variant="h6">{meal.meal}</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Food</TableCell>
                                <TableCell>Servings</TableCell>
                                <TableCell>Calories</TableCell>
                                <TableCell>Protein (g)</TableCell>
                                <TableCell>Fat (g)</TableCell>
                                <TableCell>Carbohydrates (g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {meal.foods?.map((food, foodIndex) => (
                                <TableRow key={foodIndex}>
                                    <TableCell>{food.recipe.name}</TableCell>
                                    <TableCell>{food.serving}</TableCell>
                                    <TableCell>{food.recipe.calories * food.serving}</TableCell>
                                    <TableCell>{food.recipe.protein * food.serving}</TableCell>
                                    <TableCell>{food.recipe.fat * food.serving}</TableCell>
                                    <TableCell>{food.recipe.carbohydrates * food.serving}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ))}
        </div>
    );
};

export default Recipe;
