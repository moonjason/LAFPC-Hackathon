import React, { Component } from "react"
import S from "./style"
import { Radio } from "@material-ui/core"
import DownArrow from "./down-arrow.png"

class HealthyIndicators extends Component {
    componentDidMount() {
        document.getElementById("food-insecurity-overall").checked = true
    }
    handleIndicator = (e) => {
        this.props.selectIndicators(e)
    }
    handleFilter = (e) => {
        this.props.selectFilter(e)
    }
    handleAge = (e) => {
        this.props.selectAge(e.target.id)
    }
    handleEthnicity = (e) => {
        this.props.selectEthnicity(e.target.id)
    }
    handleLevel = (e) => {
        this.props.selectLevel(e.target.id)
    }
    toggleActive = (e) => {
        const active = document.querySelectorAll(".active")
        if(active.length > 0) {
            for(let i = 0; i < active.length; i++) {
                active[i].classList.remove("active")
            }
        }
        e.currentTarget.className.indexOf("active") >= 0 ? e.currentTarget.className = e.currentTarget.className.substring(0, e.currentTarget.className.length-7) : e.currentTarget.className += " active"
        this.props.selectFilter(e)
    }
    render() {
        return(
            <S.FilterContainer>
                    <S.IndicatorDiv>
                        <S.IndicatorContainer>
                            <S.IndicatorTitle>Indicators ({this.props.indicators.length}/3)</S.IndicatorTitle>
                        </S.IndicatorContainer>
                        <S.Label htmlFor="food-insecurity-overall" onClick={this.handleIndicator}>
                            <input type="checkbox" id="food-insecurity-overall"></input>
                            <S.LabelTitle>Food Insecurity (overall)</S.LabelTitle>
                        </S.Label>
                        <S.Label htmlFor="food-insecurity-low" onClick={this.handleIndicator}>
                            <input type="checkbox" id="food-insecurity-low"></input>
                            <S.LabelTitle>Food Insecurity (low)</S.LabelTitle>
                        </S.Label>
                        <S.Label htmlFor="food-insecurity-vlow" onClick={this.handleIndicator}>
                            <input type="checkbox" id="food-insecurity-vlow"></input>
                            <S.LabelTitle>Food Insecurity (very low)</S.LabelTitle>
                        </S.Label>
                        <S.Label htmlFor="overweight" onClick={this.handleIndicator}>
                            <input type="checkbox" id="overweight"></input>
                            <S.LabelTitle>Overweight</S.LabelTitle>
                        </S.Label>
                        <S.Label htmlFor="obesity" onClick={this.handleIndicator}>
                            <input type="checkbox" id="obesity"></input>
                            <S.LabelTitle>Obesity</S.LabelTitle>
                        </S.Label>
                        <S.Label htmlFor="diabetes" onClick={this.handleIndicator}>
                            <input type="checkbox" id="diabetes"></input>
                            <S.LabelTitle>Diabetes</S.LabelTitle>
                        </S.Label>
                        <S.Label htmlFor="high-cholesterol" onClick={this.handleIndicator}>
                            <input type="checkbox" id="high-cholesterol"></input>
                            <S.LabelTitle>High Cholesterol</S.LabelTitle>
                        </S.Label>
                        <S.Label htmlFor="hypertension" border="1px solid transparent" onClick={this.handleIndicator}>
                            <input type="checkbox" id="hypertension"></input>
                            <S.LabelTitle>Hypertension</S.LabelTitle>
                        </S.Label>
                    </S.IndicatorDiv>
                    <S.Accordian id="ageGroup" className={"active"} onClick={this.toggleActive}>
                        <S.AccordianTitle>Age</S.AccordianTitle>
                        <S.downArrow src={DownArrow}></S.downArrow>
                    </S.Accordian>
                    <S.AccordionContent className="content">
                        <S.Label>
                            <input id="eighteen" type="radio" name="age" defaultChecked onClick={this.handleAge}></input>
                            <S.LabelTitle>18 - 24 years old</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="twentyFive" type="radio" name="age" onClick={this.handleAge}></input>
                            <S.LabelTitle>25 - 39 years old</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="thirty" type="radio" name="age" onClick={this.handleAge}></input>
                            <S.LabelTitle>30 - 39 years old</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="forty" type="radio" name="age" onClick={this.handleAge}></input>
                            <S.LabelTitle>40 - 49 years old</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="fifty" type="radio" name="age" onClick={this.handleAge}></input>
                            <S.LabelTitle>50 - 59 years old</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="sixty" type="radio" name="age" onClick={this.handleAge}></input>
                            <S.LabelTitle>60 - 64 years old</S.LabelTitle>
                        </S.Label>
                        <S.Label border="1px solid transparent">
                            <input id="sixtyFivePlus" type="radio" name="age" onClick={this.handleAge}></input>
                            <S.LabelTitle>65+</S.LabelTitle>
                        </S.Label>
                    </S.AccordionContent>
                    <S.Accordian id="raceEthnicity" onClick={this.toggleActive}>
                        <S.AccordianTitle>Ethnicity</S.AccordianTitle>
                        <S.downArrow src={DownArrow}></S.downArrow>
                    </S.Accordian>
                    <S.AccordionContent className="content">
                        <S.Label>
                            <input id="africanAmerican" type="radio" name="ethnicity" defaultChecked onClick={this.handleEthnicity}></input>
                            <S.LabelTitle>African American</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="asian" type="radio" name="ethnicity" onClick={this.handleEthnicity}></input>
                            <S.LabelTitle>Asian</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="latino" type="radio" name="ethnicity" onClick={this.handleEthnicity}></input>
                            <S.LabelTitle>Latin X</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="white" type="radio" name="ethnicity" onClick={this.handleEthnicity}></input>
                            <S.LabelTitle>White</S.LabelTitle>
                        </S.Label>
                    </S.AccordionContent>
                    <S.Accordian id="federalPovertyLevel" onClick={this.toggleActive}>
                        <S.AccordianTitle>Federal Poverty Level</S.AccordianTitle>
                        <S.downArrow src={DownArrow}></S.downArrow>
                    </S.Accordian>
                    <S.AccordionContent className="content">
                        <S.Label>
                            <input id="belowFpl" type="radio" name="FPL" defaultChecked onClick={this.handleLevel}></input>
                            <S.LabelTitle>0 - 99%</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="oneHundredFpl" type="radio" name="FPL" onClick={this.handleLevel}></input>
                            <S.LabelTitle>100 - 199%</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="twoHundredFpl" type="radio" name="FPL" onClick={this.handleLevel}></input>
                            <S.LabelTitle>200 - 299%</S.LabelTitle>
                        </S.Label>
                        <S.Label>
                            <input id="threeHundredFpl" type="radio" name="FPL" onClick={this.handleLevel}></input>
                            <S.LabelTitle>300% or greater</S.LabelTitle>
                        </S.Label>
                    </S.AccordionContent>
            </S.FilterContainer>
        )
    }
}

export default HealthyIndicators