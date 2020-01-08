import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"
import { dark } from "@material-ui/core/styles/createPalette"

class HealthyChart extends Component {
    state = {
        series: [{
            name: 'Poverty',
            data: [44, 54, 23],
            color: "red"
        }, {
            name: 'Obesity',
            data: [76, 85, 101]
        }, {
            name: 'Mental Illness',
            data: [35, 41, 36]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '75%'
            },
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [2013, 2017, 2020],
            },
            yaxis: {
                title: {
                    text: 'Percentage of population'
                }
            },
            fill: {
                opacity: 1
            },
            colors:['#DB5461', '#218380', '#4DFFF3'],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return `${val}%`
                    }
                }
            }
        },
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart 
                    options={this.state.options} 
                    series={this.state.series} 
                    type="bar" 
                    height={500}
                    width={"100%"}
                />
            </div>
        )
    }
}

export default HealthyChart