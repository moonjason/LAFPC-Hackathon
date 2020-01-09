import React, { Component } from "react"
import S from "./style"
import { Radio } from "@material-ui/core"

class HealthyIndicators extends Component {
    componentDidMount() {
        document.getElementById("food-insecurity-overall").checked = true
    }
    handleIndicator = (e) => {
        this.props.selectIndicators(e)
    }
    handleAge = (e) => {
        this.props.selectAge(e.target.id)
    }
    toggleActive = (e) => {
        const active = document.querySelectorAll(".active")
        if(active.length > 0) {
            for(let i = 0; i < active.length; i++) {
                active[i].classList.remove("active")
            }
        }
        e.currentTarget.className.indexOf("active") >= 0 ? e.currentTarget.className = e.currentTarget.className.substring(0, e.currentTarget.className.length-7) : e.currentTarget.className += " active"
    }
    render() {
        return(
            <S.FilterContainer>
                    <S.IndicatorDiv>
                        <label htmlFor="food-insecurity-overall" onClick={this.handleIndicator}>
                            <input type="checkbox" id="food-insecurity-overall"></input>
                            Food Insecurity (overall)
                        </label>
                        <label htmlFor="food-insecurity-low" onClick={this.handleIndicator}>
                            <input type="checkbox" id="food-insecurity-low"></input>
                            Food Insecurity (low)
                        </label>
                        <label htmlFor="food-insecurity-vlow" onClick={this.handleIndicator}>
                            <input type="checkbox" id="food-insecurity-vlow"></input>
                            Food Insecurity (very low)
                        </label>
                        <label htmlFor="overweight" onClick={this.handleIndicator}>
                            <input type="checkbox" id="overweight"></input>
                            Overweight
                        </label>
                        <label htmlFor="obesity" onClick={this.handleIndicator}>
                            <input type="checkbox" id="obesity"></input>
                            Obesity
                        </label>
                        <label htmlFor="diabetes" onClick={this.handleIndicator}>
                            <input type="checkbox" id="diabetes"></input>
                            Diabetes
                        </label>
                        <label htmlFor="high-cholesterol" onClick={this.handleIndicator}>
                            <input type="checkbox" id="high-cholesterol"></input>
                            High Cholesterol
                        </label>
                        <label htmlFor="hypertension" onClick={this.handleIndicator}>
                            <input type="checkbox" id="hypertension"></input>
                            Hypertension
                        </label>
                    </S.IndicatorDiv>
                    <S.Accordian className={"active"} onClick={this.toggleActive}>
                        <S.AccordianTitle>Age</S.AccordianTitle>
                    </S.Accordian>
                    <S.AccordionContent className="content">
                        <label>
                            <input id="eighteen" type="radio" name="age" defaultChecked onClick={this.handleAge}></input>
                            <span>18-24 years old</span>
                        </label>
                        <label>
                            <input id="twentyFive" type="radio" name="age" onClick={this.handleAge}></input>
                            <span>25-39 years old</span>
                        </label>
                        <label>
                            <input id="thirty" type="radio" name="age" onClick={this.handleAge}></input>
                            <span>30-39 years old</span>
                        </label>
                        <label>
                            <input id="forty" type="radio" name="age" onClick={this.handleAge}></input>
                            <span>40-49 years old</span>
                        </label>
                        <label>
                            <input id="fifty" type="radio" name="age" onClick={this.handleAge}></input>
                            <span>50-59 years old</span>
                        </label>
                        <label>
                            <input id="sixty" type="radio" name="age" onClick={this.handleAge}></input>
                            <span>60-64 years old</span>
                        </label>
                        <label>
                            <input id="sixtyFivePlus" type="radio" name="age" onClick={this.handleAge}></input>
                            <span>65+</span>
                        </label>
                    </S.AccordionContent>
                    <S.Accordian onClick={this.toggleActive}>
                        <S.AccordianTitle>Ethnicity</S.AccordianTitle>
                    </S.Accordian>
                    <S.AccordionContent className="content">wrewrfw</S.AccordionContent>
                    <S.Accordian onClick={this.toggleActive}>
                        <S.AccordianTitle>NSL</S.AccordianTitle>
                    </S.Accordian>
                    <S.AccordionContent className="content">wrsw</S.AccordionContent>
            </S.FilterContainer>
        )
    }
}

export default HealthyIndicators