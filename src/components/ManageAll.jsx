import React from 'react'
import { DataContext } from '../context/Context'
import { Box, Typography, Button, CircularProgress, Fade } from '@mui/material'

export default function ManageAll({ dataList,setDisplay }) {

    const { addData, data } = React.useContext(DataContext)
    const [query, setQuery] = React.useState([
        'idle',
        'idle',
        'idle',
        'idle',
        'idle',
        'idle',
        'idle',
        'idle',
        'idle',
        'idle',
    ]);
    const timerRef = React.useRef();
    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );

    const handleClickQuery = (data, num) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // if (query[num][num] !== 'idle') {
        //     setQuery((prevQuery) => {
        //         const copyPrevQuery = [...prevQuery];
        //         copyPrevQuery[num] = 'idle';
        //         return copyPrevQuery;
        //     });
        //     return;
        // }

        setQuery((prevQuery) => {
            const copyPrevQuery = [...prevQuery];
            copyPrevQuery[num] = 'progress';
            return copyPrevQuery;
        });

        timerRef.current = window.setTimeout(() => {
            setQuery((prevQuery) => {
                const copyPrevQuery = [...prevQuery];
                copyPrevQuery[num] = 'success';
                return copyPrevQuery;
            });
        }, 3000);
        addData(data)
        console.log(data)
    };
    return (
        <Box sx={{ mt: 14, ml: 2 }}>
            <Typography variant="h4">Similar Accounts</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    my: 7
                }}>
                    {
                        dataList.length > 0 ?
                            dataList.map((item, index) => {
                                var flag = false
                                var filteredData = data.filter((data) => data.company === item.company)
                                if (filteredData.length > 0) {
                                    flag = true
                                }

                                return (
                                    <Box key={index} sx={{
                                        width: 'calc(100% / 3 - 20px)',
                                        height: '100px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: '#f5f5f5',
                                        m: 1,
                                        borderRadius: 2,
                                        p: 2
                                    }}>
                                        <Box sx={{ width: '20%' }}>
                                            <img src={`${item.logo}`} alt={item.company} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: '1rem' }}>{item.company}</Typography>
                                            <Typography sx={{ fontSize: '0.8rem' }}>{item.website}</Typography>
                                        </Box>
                                        <Box>
                                            <Button sx={{ textTransform: 'none' }} variant="outlined" color={query[index] === 'progress' ? 'secondary' : query[index] === 'success' || flag ? 'success' : 'error'} size='small' onClick={() => { !flag ? handleClickQuery(item, index) : console.log(item) }} >
                                                {
                                                    query[index] === 'idle' && !flag ? 'Track' :
                                                        query[index] === 'progress' ? <Fade
                                                            in={query[index] === 'progress'}
                                                            style={{
                                                                transitionDelay: query[index] === 'progress' ? '800ms' : '0ms',
                                                            }}
                                                            unmountOnExit
                                                        >
                                                            <CircularProgress size={25} sx={{ mx: 2 }} color="secondary" />
                                                        </Fade> :
                                                            query[index] === 'success' || flag ? 'Tracking' : null
                                                }
                                            </Button>
                                        </Box>
                                    </Box>
                                )
                            }) : null
                    }
                </Box>
                <Box sx={{ width: '50%' }}>
                    <Typography sx={{fontSize:'1.5rem'}}>Quick Actions</Typography>
                    <Typography sx={{fontSize:'1rem',cursor:'pointer'}} onClick={()=>setDisplay(5)}>Track new Accout</Typography>
                    <Typography sx={{fontSize:'1rem',cursor:'pointer'}} onClick={()=>setDisplay(6)}>Bulk Track Account</Typography>
                    <Typography sx={{fontSize:'1rem',cursor:'pointer'}} onClick={()=>setDisplay(7)}>Manage Accounts</Typography>

                </Box>
            </Box>
        </Box>
    )
}
