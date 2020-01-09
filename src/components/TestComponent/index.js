import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import data from "./rawDataAffordable"
import HealthyChart from "./HealthyChart"
import HealthyIndicators from "./HealthyIndicators"
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// Material UI Themes
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './TestComponent.css'

// Styled Components
import S from './style'


const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Arbutus Slab',
            'Nunito',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    }
});



class TestComponent extends Component {

    state = {
        affordableData: [],
        indicators: ["food-insecurity-overall"],
        filter: "ageGroup",
        nextFilter: "eighteen",
        ethnicity: "",
        series: [],
    }

    componentDidMount = () => {
        console.log(data," thi")
        this.refreshGraph()
    }
    selectIndicators = (e) => {
        if(this.state.indicators.length === 3 && e.target.checked) {
            const newArr = [...this.state.indicators]
            document.querySelector(`#${newArr.shift()}`).checked = false
            newArr.push(e.target.id)
            this.setState({
                indicators: newArr
            }, () => {
                this.refreshGraph()
            })
            return
        }
        // if(this.state.indicators.length === 1 && e.target.checked === false) {
        //     e.target.checked = true
        //     return
        // }
        if(e.target.checked) {
            this.setState({
                indicators: [...this.state.indicators, e.target.id]
            }, () => {
                this.refreshGraph()
            })
        } else if(e.target.checked === false){
            const newArr = [...this.state.indicators]
            newArr.splice(newArr.indexOf(e.target.id), 1)
            this.setState({
                indicators: [...newArr]
            }, () => {
                this.refreshGraph()
            })
        }
    }
    selectFilter = (e) => {
        console.log(e.currentTarget.id)
        const nextFilter = e.currentTarget.id === "ageGroup" ? "eighteen" : e.currentTarget.id === "raceEthnicity" ? "africanAmerican" : "belowFpl" 
        this.setState({
            filter: e.currentTarget.id,
            nextFilter
        }, () => {
            this.refreshGraph()
        })
    }
    selectAge = (age) => {
        this.setState({
            nextFilter: age
        }, () => {
            this.refreshGraph()
        })
    }
    selectEthnicity = (ethnicity) => {
        this.setState({
            nextFilter: ethnicity
        }, () => {
            this.refreshGraph()
        })
    }
    selectLevel = (level) => {
        this.setState({
            nextFilter: level
        }, () => {
            this.refreshGraph()
        })
    }
    refreshGraph = () => {
        const series = this.state.indicators.map(indicator => {
            if(indicator === "food-insecurity-overall") {
                console.log(this.state.filter, "filter")
                console.log(this.state.nextFilter, "nextFilter")
                const firstYear = Math.trunc(data["2011"]["overallFoodInsecurity"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const secondYear = Math.trunc(data["2015"]["foodInsecure"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const thirdYear = Math.trunc(data["2018"]["foodInsecure"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const newData = [firstYear, secondYear, thirdYear]
                return {
                    name: "Food Insecurity (overall)",
                    data: newData
                }
            } else if (indicator === "food-insecurity-low") {
                const firstYear = 0
                const secondYear = 0
                const thirdYear = Math.trunc(data["2018"]["lowFoodSecurity"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const newData = [firstYear, secondYear, thirdYear]
                return {
                    name: "Food Insecurity (low)",
                    data: newData
                }
            } else if(indicator === "food-insecurity-vlow") {
                const firstYear = 0
                const secondYear = 0
                const thirdYear = Math.trunc(data["2018"]["veryLowFoodSecurity"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const newData = [firstYear, secondYear, thirdYear]
                return {
                    name: "Food Insecurity (very low)",
                    data: newData
                }
            } else if (indicator === "overweight") {
                const firstYear = 0
                const secondYear = 0
                const thirdYear = Math.trunc(data["2018"]["overweight"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const newData = [firstYear, secondYear, thirdYear]
                return {
                    name: "Overweight",
                    data: newData,
                }
            } else if (indicator === "obesity") {
                const firstYear = 0
                const secondYear = 0
                const thirdYear = Math.trunc(data["2018"]["obese"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const newData = [firstYear, secondYear, thirdYear]
                return {
                    name: "Obesity",
                    data: newData
                }
            } else if(indicator === "diabetes") {
                const firstYear = Math.trunc(data["2011"]["everDiagnosedWithDiabetes"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const secondYear = Math.trunc(data["2015"]["everDiagnosedWithDiabetes"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const thirdYear = Math.trunc(data["2018"]["everDiagnosedWithDiabetes"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const newData = [firstYear, secondYear, thirdYear]
                return {
                    name: "Diabetes",
                    data: newData
                }
            } else if(indicator === "high-cholesterol") {
                const firstYear = Math.trunc(data["2011"]["everDiagnosedWithHighCholesterol"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const secondYear = Math.trunc(data["2015"]["everDiagnosedWithHighCholesterol"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const thirdYear = Math.trunc(data["2018"]["everDiagnosedWithHighCholesterol"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const newData = [firstYear, secondYear, thirdYear]
                return {
                    name: "High Cholesterol",
                    data: newData
                }
            } else if(indicator === "hypertension") {
                const firstYear = Math.trunc(data["2011"]["everDiagnosedWithHypertension"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const secondYear = Math.trunc(data["2015"]["everDiagnosedWithHypertension"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const thirdYear = Math.trunc(data["2018"]["everDiagnosedWithHypertension"][`${this.state.filter}`][`${this.state.nextFilter}`]*100)
                const newData = [firstYear, secondYear, thirdYear]
                return {
                    name: "Hypertension",
                    data: newData
                }
            }
        })
        this.setState({
            series
        })
    }

    render() {
        console.log(this.state.indicators)
        return (
            <S.Container1>
                <S.DescribSec>
                    <h1>Affordability</h1>
                    <S.DescribPar>All Angelenos, regardless of their income level, should have the ability to access Good Food. Affordability is an essential component of access. Supplemental nutrition programs such as SNAP, formerly known as food stamps, and Women, Infants and Children (WIC) increase the accessibility of food by expanding the food budgets of program participants, most of whom are low-income children, families and seniors. Prioritizing affordability means ensuring that our most vulnerable populations can access Good Food through the acceptance of supplemental nutrition vouchers and other strategies.</S.DescribPar>

                </S.DescribSec>
      
                <DataCard></DataCard>

                <S.Container2>
                    <HealthyIndicators selectIndicators={this.selectIndicators} selectFilter={this.selectFilter} selectAge={this.selectAge} selectEthnicity={this.selectEthnicity} selectLevel={this.selectLevel} refreshGraph={this.refreshGraph}/>
                        {/* <ThemeProvider theme={theme}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography >Indicator</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <RadioGroup aria-label="gender" name="gender2">
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={event => event.stopPropagation()}
                                    onFocus={event => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Food Insecurity (overall)"
                                />
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={event => event.stopPropagation()}
                                    onFocus={event => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Food Insecurity (low)"
                                />
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={event => event.stopPropagation()}
                                    onFocus={event => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label="Liquor"
                                />
                                </RadioGroup>
                            </ExpansionPanelDetails>
                            

                            
                        </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography >Source</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <RadioGroup aria-label="gender" name="gender2">
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="food insecurity (overall)"
                                    />
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="Grocery"
                                    />
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="Liquor"
                                    />

                                </RadioGroup>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>        

                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography >Payment</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <RadioGroup aria-label="gender" name="gender2">
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="food insecurity (overall)"
                                    />
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="Grocery"
                                    />
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="Liquor"
                                    />

                                </RadioGroup>
                            </ExpansionPanelDetails>
                        </ExpansionPanel> 
                        </ThemeProvider>   */}
                    <div id="chart">
                        <HealthyChart series={this.state.series}/>
                    </div>
                </S.Container2>
            </S.Container1>
        )
    }
}

export default withRouter(TestComponent)