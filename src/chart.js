export function createChart(dates, values, type) {
 var data = [
    {
      x: dates,
      y: values,
      type: type
    }
  ];

  var layout = { 

    title: 'Inflacion Argentina en los ultimos 12 meses',
  
    font: {size: 18}
  
  };
  
  
  var config = {responsive: true}

  Plotly.newPlot('chart', data, layout, config);   
}