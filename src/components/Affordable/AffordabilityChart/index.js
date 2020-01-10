import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"
import { dark } from "@material-ui/core/styles/createPalette"

class AffordabilityChart extends Component {
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
            title: {
                text: "LA County Affordability Statistics",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize:  '16px',
                  color:  '#263238'
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val, opts) {
                    if(val === 0) {
                        return val = "N/A"
                    } else {
                        return `${val}%`
                    }
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
                max: 60,
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

export default AffordabilityChart