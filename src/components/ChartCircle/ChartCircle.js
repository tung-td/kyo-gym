import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ChartCircle.module.css';
import Chart from 'chart.js/auto';

const ChartCircle = () => {
    const chartRefCircle = useRef(null);
    const chartInstanceCircle = useRef(null);
    const location = useLocation();
    const path = location.pathname;
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        setCurrentPage(path);

        if (chartInstanceCircle.current) {
            chartInstanceCircle.current.destroy();
        }

        const myChartCircle = chartRefCircle.current.getContext('2d');

        chartInstanceCircle.current = new Chart(myChartCircle, {
            type: 'doughnut',
            data: {
                labels: ['Day 1-10', 'Day 10-20', 'Day 20-30'],
                datasets: [{
                    label: 'Table of customer exercise levels',
                    data: [40, 80, 60],
                    fill: false,
                    backgroundColor: [
                        '#dd7969',
                        '#8fbed1',
                        '#edc45b',
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                cutout: '80%',
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                    }
                }
            }
        });
    }, [path]);

    return (
        <div className={`${styles.chart} ${currentPage === '/user' ? styles.userChart : ''}`}>
            Track progress by day
            <canvas ref={chartRefCircle} />
        </div>
    );
}

export default ChartCircle;
