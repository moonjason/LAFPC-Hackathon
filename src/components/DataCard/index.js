import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Year, CardContainer, BlobStyle, DataNumbers, CardContent, StoresInLa, DataBox, Percentage } from './style';
import blob from './img/blob.png';

const DataCard = () => {
    return (
        <CardContainer>
            <Year>2013</Year>
            <CardContent>
                <BlobStyle src={blob}/>
                <DataNumbers>3,736</DataNumbers>
                <StoresInLa>STORES IN LA COUNTY</StoresInLa>
                <Percentage>+3.1%</Percentage>
                <DataBox></DataBox>
            </CardContent>
        </CardContainer>
    );
}

export default DataCard