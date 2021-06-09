import React, { useState } from 'react'
import data from './Data'
import "./galstyle.css"
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Text from './Text'

const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: "center",
        color: "#343f56",
        padding: "20px 0px"

    },
    CardBody: {
        [theme.breakpoints.up('md')]: {
            height: "400px",
        },
    },
    CardImg: {
        position: "relative",
        width: "100%",
        transition: "all 350ms ease",
        cursor: "pointer",
        "&:hover": {
            filter: "opacity(1)",
            transform: "scale(1.1)"
        },

        [theme.breakpoints.down('sm')]: {
            height: "320px",

        },
        [theme.breakpoints.up('md')]: {
            height: "400px",
        },
    },
    CardImgText: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
        [theme.breakpoints.up('md')]: {
            height: "10px",
            textAlign: "center",
            backgroundColor: "#ffffff",
        },
    },
}))

export const Gallery = () => {

    const classes = useStyles();
    const [model, setmodel] = useState(false);
    const [Tempimg, setTempimg] = useState('');
    const getImg = (imgsrc) => {
        setTempimg(imgsrc);
        setmodel(true);
    }

    return (
        <>
            <Container>
                <h1 style={{ color: "#343f56", textTransform: "uppercase", margin: "20px", textAlign: "center" }}>
                    <Text />
                </h1>
                <Grid container spacing={3} style={{ background: "#f5e6ca" }}>
                    {data.map((item) => {
                        return (

                            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} style={{ background: "#f5e6ca" }}>
                                <div className={model ? "model open" : "model"}>
                                    <img src={Tempimg} />
                                    <CloseIcon onClick={() => setmodel(false)} />
                                </div>
                                <Card className={classes.CardBody} style={{ background: "#f5e6ca", border: "none", outline: "none" }}>
                                    <div onClick={() => getImg(item.imgsrc)}>
                                        <CardMedia
                                            className={classes.CardImg}
                                            title={item.name}
                                            image={item.imgsrc}>
                                        </CardMedia>
                                    </div>
                                </Card>
                            </Grid>
                        );
                    })
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Gallery