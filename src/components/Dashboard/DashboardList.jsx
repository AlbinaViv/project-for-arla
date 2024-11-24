import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import milkData from './data.json';
import styles from './DashboardList.module.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const DashboardList = () => {
  const [data, setData] = useState([]);

  const newData = data.map(data => {
    const idFarmArr = data.Farm_ID.split('');

    const idFarm = idFarmArr.slice(5, idFarmArr.length).join('');
    console.log(idFarm);

    return { ...data, Farm_ID: idFarm };
  });

  useEffect(() => {
    setData(milkData);
  }, []);

  return (
    <div className={styles.container}>
      {/* Volume Chart */}
      <div className={styles.chartContainer}>
        <h3 className={styles.title}>Volume of Milk (litres) by Farm</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={newData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Farm_ID"
              label={{
                value: 'Farm ID',
                position: 'insideBottomRight',
                offset: 0,
              }}
            />
            <YAxis
              label={{
                value: 'Volume (litres)',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="Volume_litres" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Temperature Chart */}
      <div className={styles.chartContainer}>
        <h3 className={styles.title}>Temperature by Farm</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={newData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Farm_ID" />
            <YAxis
              label={{
                value: 'Temperature (°C)',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Temperature_degree_celsius"
              stroke="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Fat and Protein Comparison */}
      <div className={styles.chartContainer}>
        <h3 className={styles.title}>Fat and Protein Content by Farm</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={newData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Farm_ID" />
            <YAxis
              label={{
                value: 'Percentage (%)',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Fat_percent"
              stroke="#ff7300"
              name="Fat (%)"
            />
            <Line
              type="monotone"
              dataKey="Protein_percent"
              stroke="#387908"
              name="Protein (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart: Fat Distribution */}
      <div className={styles.chartContainer}>
        <h3 className={styles.title}>Fat Distribution Across Farms</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={newData}
              dataKey="Fat_percent"
              nameKey="Farm_ID"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart: Protein Distribution */}
      <div className={styles.chartContainer}>
        <h3 className={styles.title}>Protein Distribution Across Farms</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="Protein_percent"
              nameKey="Farm_ID"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#82ca9d"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
