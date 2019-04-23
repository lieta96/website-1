import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class DetailOutcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: {
            labels: ['30 de junio de 2015', '30 de junio de 2016', '30 de junio de 2017', '30 de junio de 2018'],
  datasets: [
    {
      label: 'Diseño',
      backgroundColor: '#FFDC5C',
      borderColor: '#FFDC5C',
      borderWidth: 1,
      hoverBackgroundColor: '#FFDC5C',
      hoverBorderColor: '#FFDC5C',
      data: [0, 0,540900, 368805]
    },
    {
        label: 'Impuesto e intereses',
        backgroundColor: '#219EFF',
        borderColor: '#219EFF',
        borderWidth: 1,
        hoverBackgroundColor: '#219EFF',
        hoverBorderColor: '#219EFF',
        data: [27593.75, 94031.07, 660411.1, 108363.95]
      },
      {
        label: 'Gastos de oficina',
        backgroundColor: '#9DEDAC',
        borderColor: '#9DEDAC',
        borderWidth: 1,
        hoverBackgroundColor: '#9DEDAC',
        hoverBorderColor: '#9DEDAC',
        data: [51631.08, 81950, 126310, 223747]
      },
      {
        label: 'Honorarios',
        backgroundColor: '#C894FF',
        borderColor: '#C894FF',
        borderWidth: 1,
        hoverBackgroundColor: '#C894FF',
        hoverBorderColor: '#C894FF',
        data: [1547948, 2184899, 1254320, 1727560]
      }
  ]
        }
        }
    }
    render() {
      const chartOptions = {
        scales: {
          yAxes: [
            {
              ticks: {
                callback: function(value) {
                  return '$' + value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
              }
                }
            }
          ]
      },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return '$' + parseInt(tooltipValue).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
          }
        }
      }
        const {data} = this.state;
        const {subtitle} = this.props;
        return (
            <div className="detailOutcome-container">
                 <div className="subtitle">{subtitle}</div>
                    <div className="detailOutcome-graphic">
                    <Bar
                      data={data}
                     width={650}
                     height={350}
                     options={chartOptions}
                    />
                    </div>
                       <style jsx>{
                         `
                         
                         .subtitle {
                           text-align: center;
                         }
                         
                         @media (max-width: 700px) {
                           
                          .detailOutcome-container {
                            margin-top: 20px;
                           }

                           .detailOutcome-graphic {
                            margin-top: 10px;
                          }
                         }

                         `

                       }
                       </style>
                  </div>
        )
    }
}

export default DetailOutcome;