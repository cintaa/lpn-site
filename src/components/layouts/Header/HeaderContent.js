import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Typist from 'react-typist'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        color: "white",
        marginTop: "25vh",
    },
    smBckgrndContent: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        color: "white",
        marginTop: "10vh",
    },
    noParallaxBckground: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        color: "black",
        marginTop: "6vh",
    }
}));

export default function HeaderContent({pageNum}) {
    const msgs = ["A Business Leadership Fraternity.", "ΛΦΝ", "UC Irvine"]
    const classes = useStyles();

    switch(pageNum) {

        case 0:
            return (
                <Box className={classes.content}>
                    <Typography component="div">
                        <Typist cursor={{show: false}}>

                        <Box fontWeight="fontWeightBold" fontSize='4rem'>{msgs[0]}</Box>
                        <Typist.Backspace count={msgs[0].length} delay={300}></Typist.Backspace>

                        <Box fontWeight="fontWeightBold" fontSize='6rem'>{msgs[1]}</Box>
                        <Box fontWeight="fontWeightMedium" fontSize='5rem'>{msgs[2]}</Box>

                        </Typist>
                    </Typography>
                </Box>
                
            )
            
        case 1:
            return (
                <Box className={classes.content}>
                    <Box fontWeight="fontWeightBold" fontSize='5rem'>
                        About Us
                    </Box>
                </Box>
            )

        case 2:
            return (
                <Box className={classes.noParallaxBckground}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Active Brothers
                    </Box> 
                    <Divider style={{height: 1, width: "70%"}}></Divider>
                </Box>
               
            )

        case 3:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Campus Involvement
                    </Box>
                </Box>
            )

        case 4:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Careers
                    </Box>
                </Box>
            )
        case 5:
            return (
                <React.Fragment></React.Fragment>
            )
        case 6:
            return (
                <Box className={classes.noParallaxBckground}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Common Questions
                    </Box>
                    <Divider style={{ height: 1, width: "70%" }}></Divider>
                </Box>
            )
        case 7:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Our Memories
                    </Box>
                </Box>
            )
        case 8:
            return (
                <Box className={classes.noParallaxBckground}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Questions?
                    </Box>
                    <Divider style={{ height: 1, width: "70%" }}></Divider>
                </Box>
            )

        case 10:
            return (
                <React.Fragment></React.Fragment>
            )
    
        default:
            return (
                <Typography variant="h1">Hi :)</Typography>
            )
    }
}
