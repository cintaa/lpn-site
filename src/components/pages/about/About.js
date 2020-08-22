import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import { ParallaxBanner } from 'react-scroll-parallax';

import useWindowDimensions from '../../WindowListener'
import CoreValues from './CoreValues'
import LPNFacts from './LPNFacts'
import history_sep from '../../../assets/misc/History_2.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
    paragraph: {
        maxWidth: "80%"
    },
    parallax: {
        position: "relative",
        zIndex: 1,
        color: "white",
    },
}));

export default function About({setPage}) {
    useEffect(() => {
        setPage("About")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    return (
        <Box mt={8} mb={8} className={classes.root}>

            <Box className={classes.paragraph}>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h2.fontSize">
                        Who Are We?
                    </Box>
                </Typography>

                <Typography component="div">
                    <Box fontSize="1.1rem" style={{ textAlign: "center" }}>
                        Lambda Phi Nu is a co-ed  business leadership fraternity founded at UCI
                        committed to inspiring the best in everyone. Our brothers aspire to become visionaries, influencers, and
                        mobilizers. This means we dream big, rally support, and get it done.
                    </Box>

                    <Box fontSize="1.1rem" mt={2} mb={4} style={{ textAlign: "center" }}>
                        During their time on campus, each of our brothers left a legacy because they saw a need to fill,
                        a problem to solve, or someone to care about. We are inspired to carry on the torch they left us.
                    </Box>
                </Typography>

            </Box>
          
            <Divider style={{ width: "70%" }}></Divider>

            <Box mt={4} mb={4} className={classes.paragraph}>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h2.fontSize">
                        Why ΛΦΝ?
                    </Box>
                </Typography>

                <Box mt={4} mb={4}>
                    <LPNFacts isMobile={isMobile}></LPNFacts>
                </Box>
            </Box>

            <Divider style={{ width: "70%" }}></Divider>

            <Box mt={4} mb={8} className={classes.paragraph}>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h2.fontSize">
                        Our Core Values
                    </Box>
                </Typography>

                <Box mt={4}>
                    <CoreValues></CoreValues>
                </Box>
             </Box>   

            <ParallaxBanner
                style={{
                    height: '60vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                layers={[
                    {
                        image: `url(${history_sep})`,
                        amount: 0.2,
                        props: {
                            style: {
                                backgroundImage: `url(${history_sep})`
                            }
                        },
                    },
                ]}
            >
                <div className={classes.parallax}>
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" fontSize="4rem">
                            History
                        </Box>
                    </Typography>
                </div>
            </ParallaxBanner>

            <Box mt={8}>
                <Typography component="div">
                    <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                        Our Heritage
                    </Box>
                </Typography>
            </Box>

            <Divider></Divider>

            <Box mt={2} mb={6} className={classes.paragraph} style={{ textAlign: "left" }}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize">
                        The 2008 Financial Crisis was the catalyst for starting Lambda Phi Nu. At a macro level, the housing bubble burst, Dow Jones prices were at a historical low, and 1.2 million jobs were lost within one year. At a micro-level, students felt the impact with rising tuition, curtailed financial aid, and shortage in faculty. To make matters worse, UCI’s business program was still young; its undergraduate business program initiated its first 200 students in the Fall of 2008. Thus, UCI was a school many companies considered dropping their sponsorship and support.
                    </Box>
                    <Box fontSize="h6.fontSize" mt={4}>
                        In the midst of these challenging times, a group of student leaders wanted to create opportunities for UCI’s business students. It began with the Accounting Association Officer Board seeking to make UCI a target school for public accounting firms. While pursuing this vision, a deep camaraderie was formed between the Officers – reflecting a brotherhood like that of a Fraternity. In the summer of 2010, our founding Chief Executive Officer decided to extend this spirit of brotherhood to student leaders in other organizations. Subsequently, the officers from Accounting Association, President and Founder of Merage Undergraduate Student Association, Senior Advisor of Undergraduate Business Association, President of Undergraduate Finance Association, President and Founder of Management Information Student Society, and a Paul Merage MBA candidate convened to form Lambda Phi Nu.
                    </Box>
                    <Box fontSize="h6.fontSize" mt={4}>
                        Although a majority of the Founders already received full-time offers, they spent their senior years mentoring students, growing sponsorships, and launching new initiatives. Their motive was to give back to UCI and cultivate a legacy of student leaders who also wanted to give back. Lambda Phi Nu continues to push to make our school more competitive in the business community through fostering collaboration among student leaders. In the words of the Apostle Paul, “do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.” Our reason to exist has been and will always be to “Grow Forward, Give Back” – one leader, one community, and one campus at a time.
                    </Box>
                </Typography>
            </Box>
           
            <Box>
                <Typography component="div">
                    <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                        Chapter Founding & Rebranding
                    </Box>
                </Typography>
            </Box>

            <Box mt={2} className={classes.paragraph}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize" style={{ textAlign: "left" }}>
                        The Chapter was founded in 2010 as Beta Alpha Psi and re-branded into Lambda Phi Nu in 2014 due to fundamental differences within organizational structures. Standard Beta Alpha Psi chapters operate under an honor society structure; however the Irvine chapter sought to operate as a fraternity. We chose to re-brand under Lambda Phi Nu in order to preserve the culture and mission that we currently held.
                    </Box>
                    <Box fontSize="h4.fontSize" fontWeight="fontWeightMedium" mt={4}>
                        Founding C-Suite
                    </Box>
                    <Box fontSize="h6.fontSize" mt={1}>
                        Mr. Dennis Yu (CEO), Mr. Michael Wen (CFO), Mr. Brandon Shiaw (CIO), Mr. Art Reyes (COO), Ms. Emily Rong (CTO)
                    </Box>
                    <Box fontSize="h4.fontSize" fontWeight="fontWeightMedium" mt={4}>
                        Founding Fathers
                    </Box>
                    <Box fontSize="h6.fontSize" mt={1}>
                        Ms. Iris Chan, Mr. Edward Chiw, Mr. Nathan Kobayashi, Ms. Christine Liao, Ms. Lucy Luxiao, Ms. Michelle Nguyen, Ms. Eva Park, Mr. James Shen, Mr. Adam Whitescarver, Ms. Jessica Wong, Ms. Tonie Zhu
                    </Box>
                </Typography>
            </Box>

        </Box>
    )
}
