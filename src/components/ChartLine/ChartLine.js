import React, { useEffect, useRef } from 'react'
import styles from './ChartLine.module.css'
import Chart from 'chart.js/auto';

const ChartLine = () => {

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
                datasets: [{
                    label: 'Activity chart',
                    data: [50, 60, 80, 70, 70, 90, 100],
                    fill: false,
                    borderColor: '#d35255',
                    tension: 0.1
                }]
            }
        })
    })

    return (
        <div>
            <canvas ref={chartRef} className={styles.chart} />
        </div>
    )
}

export default ChartLine