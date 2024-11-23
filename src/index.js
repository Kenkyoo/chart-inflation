import axios from './axios';
import { createChart } from './chart.js';
import $ from "./jquery";

var type = 'lines';

async function getData(type) {
  try {
    const response = await axios.get('https://server-inflation-chart.onrender.com/api');
    const dates = response.data.fechas;
    const values = response.data.valores;
    createChart(dates, values, type)
  } catch (error) {
    console.error(error);
  }
}

$('#select').on('change', function() {
  const selectedValue = $(this).val();
  getData(selectedValue)
});

getData(type)
