import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const router = useLoaderData();
    const { id, name, total } = router.data;
    return (
        <div>
            <LineChart width={800}
                height={500}
                data={router.data}
                margin={{
                    top: 50,
                    right: 30,
                    left: 30,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;