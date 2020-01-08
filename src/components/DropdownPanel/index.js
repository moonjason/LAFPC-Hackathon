import React from 'react'
import { withRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
import './DropdownPanel.css'



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

export const useStyles = makeStyles(() => ({
    expanded: {},
    root: {
        "&$expanded": {
            margin: 0,
        }
    }
}));


export default function DropdownPanel() {

    const classes = useStyles();

    return(
    <ThemeProvider theme={theme}>
            <ExpansionPanel classes={classes}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography >Store</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <RadioGroup aria-label="gender" name="gender2">
                    {/* <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Radio color="primary" />}
                                        label="None"
                                    />
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Radio color="primary" />}
                                        label="None"
                                    /> */}

                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={event => event.stopPropagation()}
                        onFocus={event => event.stopPropagation()}
                        control={<Checkbox />}
                        label="Convenience"
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
                    {/* <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="None"
                                    /> */}


                </RadioGroup>

                {/* <NativeSelect>
                                        
                                        <option value="">None</option>
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </NativeSelect> */}
            </ExpansionPanelDetails>



        </ExpansionPanel>

            <ExpansionPanel classes={classes}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography >Source</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <RadioGroup aria-label="gender" name="gender2">
                    {/* <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Radio color="primary" />}
                                        label="None"
                                    />
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Radio color="primary" />}
                                        label="None"
                                    /> */}

                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={event => event.stopPropagation()}
                        onFocus={event => event.stopPropagation()}
                        control={<Checkbox />}
                        label="Convenience"
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
                    {/* <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="None"
                                    /> */}


                </RadioGroup>

                {/* <NativeSelect>
                                        
                                        <option value="">None</option>
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </NativeSelect> */}
            </ExpansionPanelDetails>



        </ExpansionPanel>

            <ExpansionPanel classes={classes}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography >Payment</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <RadioGroup aria-label="gender" name="gender2">
                    {/* <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Radio color="primary" />}
                                        label="None"
                                    />
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Radio color="primary" />}
                                        label="None"
                                    /> */}

                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={event => event.stopPropagation()}
                        onFocus={event => event.stopPropagation()}
                        control={<Checkbox />}
                        label="Convenience"
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
                    {/* <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={event => event.stopPropagation()}
                                        onFocus={event => event.stopPropagation()}
                                        control={<Checkbox />}
                                        label="None"
                                    /> */}


                </RadioGroup>

                {/* <NativeSelect>
                                        
                                        <option value="">None</option>
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </NativeSelect> */}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </ThemeProvider>
)

}