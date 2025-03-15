// import React, { useState, useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import './moodchart.css';

// function MoodChart() {
//   const [moods, setMoods] = useState([]);
//   const [weekMood, setWeekMood] = useState({
//     week: '',
//     moodRatings: Array(7).fill(0),
//     month: null,
//   });

//   const [selectedChart, setSelectedChart] = useState('weekly');
//   const chartRef = useRef(null);

//   useEffect(() => {
//     fetch('http://localhost:5004/api/moods')
//       .then((response) => response.json())
//       .then((data) => setMoods(data))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch('http://localhost:5004/api/moods', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(weekMood),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setMoods([data, ...moods]);
//         setWeekMood({ week: '', moodRatings: Array(7).fill(0), month: null });
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleMoodChange = (index, value) => {
//     const updatedMoodRatings = [...weekMood.moodRatings];
//     updatedMoodRatings[index] = value;
//     setWeekMood({ ...weekMood, moodRatings: updatedMoodRatings });
//   };

//   const getMonthlyChartData = () => {
//     const lastFourWeeks = moods.slice(0, 4);
//     return lastFourWeeks.map((week) => {
//       const sum = week.moodRatings.reduce((acc, rating) => acc + rating, 0);
//       return sum / week.moodRatings.length;
//     });
//   };

//   const chartData = {
//     labels:
//       selectedChart === 'weekly'
//         ? ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
//         : selectedChart === 'monthly'
//         ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
//         : ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'],
//     datasets: [
//       {
//         label: selectedChart === 'weekly' ? 'Weekly Mood' : selectedChart === 'monthly' ? 'Monthly Mood' : 'Yearly Mood',
//         data:
//           selectedChart === 'weekly'
//             ? moods.length > 0
//               ? moods[0].moodRatings
//               : Array(7).fill(0)
//             : selectedChart === 'monthly'
//             ? getMonthlyChartData()
//             : Array(12).fill(0).map((_, i) => moods.filter((m) => m.month === i + 1).reduce((acc, m) => acc + m.moodRatings.reduce((a, b) => a + b, 0) / m.moodRatings.length, 0) / moods.filter((m) => m.month === i + 1).length || 0),
//         borderColor: '#6c5ce7',
//         backgroundColor: 'rgba(108, 92, 231, 0.2)',
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const renderChart = () => {
//     if (chartRef.current) {
//       if (chartRef.current.chart) {
//         chartRef.current.chart.destroy();
//       }
//       chartRef.current.chart = new Chart(chartRef.current, {
//         type: 'line',
//         data: chartData,
//         options: {
//           responsive: true,
//           maintainAspectRatio: true,
//           plugins: {
//             title: {
//               display: true,
//               text:
//                 selectedChart === 'weekly'
//                   ? 'Weekly Mood Chart'
//                   : selectedChart === 'monthly'
//                   ? 'Monthly Mood Chart'
//                   : 'Yearly Mood Chart',
//             },
//             tooltip: {
//               callbacks: {
//                 label: (tooltipItem) => `Mood: ${tooltipItem.raw}`,
//               },
//             },
//           },
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text:
//                   selectedChart === 'weekly'
//                     ? 'Days of the Week'
//                     : selectedChart === 'monthly'
//                     ? 'Weeks'
//                     : 'Months',
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: 'Mood Rating',
//               },
//               min: 0,
//               max: 5,
//             },
//           },
//         },
//       });
//     }
//   };

//   const handleChartChange = (chartType) => {
//     setSelectedChart(chartType);
//   };

//   useEffect(() => {
//     renderChart();
//   }, [moods, selectedChart]);

//   return (
//     <div className="mood-chart">
//       <h2>Weekly Mood Tracker</h2>
//       <form onSubmit={handleSubmit} className="mood-form">
//         <div className="input-group">
//           <label>Week:</label>
//           <input
//             type="text"
//             value={weekMood.week}
//             onChange={(e) => setWeekMood({ ...weekMood, week: e.target.value })}
//             required
//           />
//         </div>

//         <div className="input-group">
//           <label>Mood Ratings (1-5):</label>
//           {weekMood.moodRatings.map((rating, index) => (
//             <div key={index}>
//               <label>Day {index + 1}:</label>
//               <input
//                 type="number"
//                 value={rating}
//                 min="1"
//                 max="5"
//                 onChange={(e) => handleMoodChange(index, e.target.value)}
//               />
//             </div>
//           ))}
//         </div>

//         <div>
//           <button type="submit" className="submit-button">Submit Mood Data</button>
//         </div>
//       </form>

//       <div className="chart-buttons">
//         <button onClick={() => handleChartChange('weekly')}>Weekly Chart</button>
//         <button onClick={() => handleChartChange('monthly')}>Monthly Chart</button>
//         <button onClick={() => handleChartChange('yearly')}>Yearly Chart</button>
//       </div>

//       <div className="chart-container">
//         <h3>{selectedChart === 'weekly' ? 'Weekly' : selectedChart === 'monthly' ? 'Monthly' : 'Yearly'} Mood Data:</h3>
//         <canvas ref={chartRef} />
//       </div>
//     </div>
//   );
// }

// export default MoodChart;


import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import './moodchart.css'; 

Chart.register(...registerables);

const MoodChart = () => {
    useEffect(() => {
        const ctxWeekly = document.getElementById('weeklyChart').getContext('2d');
        const weeklyChart = new Chart(ctxWeekly, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Mood Rating',
                    data: [3, 4, 5, 3, 4, 2, 5],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: '#FF4C4C',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5
                    }
                }
            }
        });

        const ctxMonthly = document.getElementById('monthlyChart').getContext('2d');
        const monthlyChart = new Chart(ctxMonthly, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Mood Rating',
                    data: [4, 3, 5, 2],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: '#36A2EB',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5
                    }
                }
            }
        });

        const ctxYearly = document.getElementById('yearlyChart').getContext('2d');
        const yearlyChart = new Chart(ctxYearly, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Mood Rating',
                    data: [3, 4, 2, 5, 4, 3, 2, 4, 5, 3, 4, 5],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: '#4BC0C0',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5
                    }
                }
            }
        });

        // Cleanup function to destroy the charts when the component unmounts
        return () => {
            weeklyChart.destroy();
            monthlyChart.destroy();
            yearlyChart.destroy();
        };
    }, []);

    return (
        <div className="container">
            <header>
                <h1>MOOD CHART</h1>
            </header>

            <section className="chart-section">
                <div className="chart">
                    <h2>Weekly Chart</h2>
                    <div className="chart-placeholder">
                        <canvas id="weeklyChart"></canvas>
                    </div>
                </div>

                <div className="chart">
                    <h2>Monthly Chart</h2>
                    <div className="chart-placeholder">
                        <canvas id="monthlyChart"></canvas>
                    </div>
                </div>

                <div className="chart">
                    <h2>Yearly Chart</h2>
                    <div className="chart-placeholder">
                        <canvas id="yearlyChart"></canvas>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MoodChart;