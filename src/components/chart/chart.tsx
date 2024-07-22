'use client'

import React from 'react';
import { faker } from '@faker-js/faker';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const, 
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};


const labels = ['1D', '7D', '2W', '1M', 'All'];

export const data = {
  labels,
  datasets: [
    {
      // fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      // borderColor: 'rgb(53, 162, 235)',
      borderColor: '#5B75DE',
      // backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Chart() {
  return (
    <div className=" h-96 sm:h-80 md:h-64 ">
      <Line options={options} data={data} />
    </div>
  );
}
