import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"
import { dark } from "@material-ui/core/styles/createPalette"

class HealthyChart extends Component {
    state = {
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '75%',
                    dataLabels: {
                        position: "top"
                    }
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val, opts) {
                    return `${val}%`
                },
                offsetY: -20,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    colors: ["black"]
                },
            },
            legend: {
                showForSingleSeries: true
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [2011, 2015, 2018],
                title: {
                    text: "Years (2011-2018)"
                }
            },
            yaxis: {
                min: 0,
                max: 100,
                title: {
                    text: 'Percentage of LA County population'
                }
            },
            fill: {
                opacity: 1
            },
            colors:['#DB5461', '#218380', '#FF8263'],
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
                    series={this.props.series} 
                    type="bar" 
                    height={500}
                    width={"100%"}
                />
            </div>
        )
    }
}

export default HealthyChart