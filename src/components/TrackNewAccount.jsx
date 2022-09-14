import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { DataContext } from '../context/Context'

export default function TrackNewAccount() {
    const { data, removeData } = React.useContext(DataContext)
    return (
        <Box sx={{ mt: 14, ml: 2 }}>
            <Typography variant="h4">Track New Data</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'wrap',
                my: 7
            }}>
                {
                    data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <Box key={index} sx={{
                                    width: 'fit-content',
                                    height: '100px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#f5f5f5',
                                    m: 1,
                                    borderRadius: 2,
                                    p: 2
                                }}>
                                    <Box sx={{ width: '15%' }}>
                                        <img src={`${item.logo}`} alt={item.company} />
                                    </Box>
                                    <Box sx={{ mx: 1 }}>
                                        <Typography sx={{ fontSize: '1rem' }}>{item.company}</Typography>
                                        <Typography sx={{ fontSize: '0.8rem' }}>{item.website}</Typography>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mx: 1
                                    }}>
                                        <Button sx={{ textTransform: 'none' }} variant="outlined" color="success" size='small' onClick={() => console.log(item)}>
                                            Tracking
                                        </Button>
                                        <Button sx={{ mx: 1, textTransform: 'none' }} variant="outlined" color="error" size='small' onClick={() => removeData(index)}>
                                            Remove
                                        </Button>
                                    </Box>
                                </Box>
                            )
                        }) : <Typography variant="h6">No Account to track</Typography>
                }
            </Box>
        </Box >
    )
}
