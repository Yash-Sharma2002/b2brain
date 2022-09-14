import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Avatar from '@mui/material/Avatar';


const shapeStyles = { bgcolor: 'primary.main', width: 'calc(100%/5 - 20px)', height: 100 };
const rectangle = <Box component="span" sx={shapeStyles} >Logo</Box>;

export default function Dashboard() {
    return (
        <>
            <Box sx={{
                mt: 9
            }}>
                <img src={require('../assets/hero-image.png')} alt="Hero" style={{width:'100%'}} />
            </Box>
            <Box sx={{ textAlign: 'center', my: 10 }}>
                <Typography variant="h4" sx={{ fontWeight: '700', fontFamily: 'Jost' }}>Trusted by entrprise sales term globally</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    my: 15,
                    mx: 'auto',
                    width: '90%',
                }}>
                    {rectangle}
                    {rectangle}
                    {rectangle}
                    {rectangle}
                    {rectangle}
                </Box>
            </Box>
            <Box sx={{ textAlign: 'center', my: 8, background: '#f5f5f5', padding: '40px 10px' }}>
                <Typography variant="h4" sx={{ fontWeight: '700', fontFamily: 'Jost' }}>Hear from our customers</Typography>
                <Box sx={{
                    my: 15,
                }}>
                    <Card sx={{ width: '45%', textAlign: 'start',my:10, ml: 10 }}>
                        <CardContent sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                        }}>
                            <Box>
                                <Typography variant="h6" sx={{
                                    fontWeight: '700', fontFamily: 'Jost', display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                }}>
                                    <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', fontSize: '3rem', color: 'lightpink', mt: -2 }} />
                                    Set up a converstion with a hard-to-crack account, within a week of starting with B2Brain</Typography>
                                <Box sx={{ ml: 6, mt: 1 }}>
                                    <Typography sx={{ fontSize: '0.8rem',color:'#8a8a8a'}}>
                                        Augie Hoffman, SDR Manager
                                    </Typography>
                                    {rectangle}
                                </Box>
                            </Box>
                            <Box>
                                <Avatar alt="Remy Sharp" src="Any Image" sx={{ width: 100, height: 100 }} />
                            </Box>
                        </CardContent>
                    </Card>

                    <Card sx={{ width: '45%', textAlign: 'start',my:10, mr: 10,ml:'auto' }}>
                        <CardContent sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                        }}>
                            <Box>
                                <Typography variant="h6" sx={{
                                    fontWeight: '700', fontFamily: 'Jost', display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                }}>
                                    <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', fontSize: '3rem', color: 'lightpink', mt: -2 }} />
                                    SalesLoft get 12% higher responses with personlization using B2Brain intel.</Typography>
                                <Box sx={{ ml: 6, mt: 1 }}>
                                    <Typography sx={{ fontSize: '0.8rem',color:'#8a8a8a'}}>
                                        Willian Strugis, Enterprise SDR
                                    </Typography>
                                    {rectangle}
                                </Box>
                            </Box>
                            <Box>
                                <Avatar alt="Remy Sharp" src="Any Image" sx={{ width: 100, height: 100 }} />
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}
