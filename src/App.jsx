import React, { Suspense, useRef, useEffect } from 'react';
import { Box, Drawer, AppBar, Toolbar, List, Typography, Badge, CircularProgress, ListItem, ListItemButton, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


// import './css/override.css'

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Intel = React.lazy(() => import('./components/Intel'));
const Leads = React.lazy(() => import('./components/Leads'));
const Integration = React.lazy(() => import('./components/Integration'));
const HelpSupport = React.lazy(() => import('./components/HelpSupport'));
const Team = React.lazy(() => import('./components/Team'));
const ManageAll = React.lazy(() => import('./components/ManageAll'));
const TrackNewAccount = React.lazy(() => import('./components/TrackNewAccount'));
const BulkImport = React.lazy(() => import('./components/BulkImport'));
const ProductFocus = React.lazy(() => import('./components/ProductFocus'));
const LeadPersona = React.lazy(() => import('./components/LeadPersona'));
const IntelPreferences = React.lazy(() => import('./components/IntelPreferences'));



// 1 - Dashboard
// 2 - Leads
// 3 - Intel
// 4 - Accounts -> Manage All
// 5 - Account -> Track New Accounts
// 6 - Account -> Bulk Import
// 7 - Prefernce  -> Product Focus
// 8 - Prefernce -> Intel Prefernces
// 9 - Prefernce -> Lead Personal
// 10 - Integrations
// 11 - Team
// 12 - Help/Support

const drawerWidth = 240;
const highlightedStyle = { fontWeight: 600, color: '#000', margin: '5px 0', fontFamily: 'Jost' }
const normStyle = { margin: '5px 0', fontFamily: 'Jost' }



export default function App() {

  const [display, setDisplay] = React.useState(1);
  const [query, setQuery] = React.useState('');
  const [searchIcon, setSearchIcon] = React.useState(false);
  const [dataList, setDataList] = React.useState([]);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  // dropdowns functions
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  function removeQuery() {
    setQuery('')
    setSearchIcon(false)
  }

  const handleQuery = async (e) => {
    setQuery(e.target.value);
    getData(e.target.value)
  }


  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          removeQuery()
          getData('')
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  async function getData(filter) {
    await fetch(`https://staging.staging.b2brain.com/search/autocomplete_org_all/?q=${filter}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => response.json())
      .then(data => {
        setDataList(data)
      }
      );
  }



  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#fff', color: 'black', justifyContent: 'space-between' }}
      >
        <Toolbar>
          {
            searchIcon ?
              <ClearIcon sx={{ mr: 2, cursor: 'pointer' }} onClick={removeQuery} /> :
              <SearchOutlinedIcon sx={{ mr: 2, cursor: 'pointer' }} />
          }
          <TextField
            id="standard-helperText"
            variant="standard"
            placeholder='Search by account name or website'
            value={query}
            ref={wrapperRef}
            sx={{ width: '90%' }}
            onFocus={() => { setSearchIcon(true); setDisplay(4); getData(''); }}
            onChange={(e) => { handleQuery(e) }}
          />
          <Box sx={{ mr: 3, ml: 'auto', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Box sx={{ mx: 2 }}>
              <Badge color="secondary" badgeContent=" " variant="dot">
                <Box sx={{ background: '#EFF3F9', padding: '4px 7px', }}>
                  <NotificationsNoneOutlinedIcon />
                </Box>
              </Badge>
            </Box>
            <Box>
              <img src={require('./assets/icons/Logo.png')} alt="logo" width='35' style={{ marginTop: '5px' }} />
            </Box>
          </Box>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxShadow: 4,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ justifyContent: 'space-around', py: 3 }}>
          <Typography variant="h5" noWrap >
            B2Brain
          </Typography>
        </Toolbar>
        <List>
          <ListItem disablePadding onClick={() => setDisplay(1)}>
            <ListItemButton >
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <Typography sx={display === 1 ? highlightedStyle : normStyle} >
                Dashboard
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => setDisplay(2)}>
            <ListItemButton >
              <ListItemIcon>
                <StarBorderOutlinedIcon />
              </ListItemIcon>
              <Typography sx={display === 2 ? highlightedStyle : normStyle} className={'Intel'} >
                Intels
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => setDisplay(3)}>
            <ListItemButton >
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <Typography sx={display === 3 ? highlightedStyle : normStyle} className={'Intel'} >
                Leads
              </Typography>
            </ListItemButton>
          </ListItem>

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon onClick={() => setDisplay(4)} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ alignItems: 'center' }}
            >
              <ListItem disablePadding onClick={() => setDisplay(4)}>
                <ListItemButton >
                  <ListItemIcon>
                    <AccountTreeOutlinedIcon />
                  </ListItemIcon>
                  <Typography sx={display > 3 && display < 7 ? highlightedStyle : normStyle}  >
                    Accounts
                  </Typography>

                </ListItemButton>
              </ListItem>
            </AccordionSummary>

            <AccordionDetails sx={{ borderLeft: '3px solid #e5e5e5', ml: 3.2 }}>
              <List>
                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(4)}>
                  <ListItemButton >
                    Manage All
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(5)}>
                  <ListItemButton >
                    Track New Accounts
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(6)}>
                  <ListItemButton >
                    Bulk Imports
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>


          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon onClick={() => setDisplay(7)} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{ alignItems: 'center' }}
            >
              <ListItem disablePadding onClick={() => setDisplay(7)}>
                <ListItemButton >
                  <ListItemIcon>
                    <SettingsOutlinedIcon />
                  </ListItemIcon>
                  <Typography sx={display > 6 && display < 10 ? highlightedStyle : normStyle}  >
                    Preferences
                  </Typography>

                </ListItemButton>
              </ListItem>
            </AccordionSummary>

            <AccordionDetails sx={{ borderLeft: '3px solid #e5e5e5', ml: 3.2 }}>
              <List>
                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(7)}>
                  <ListItemButton >
                    Product Focus
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(8)}>
                  <ListItemButton >
                    Intel Preferences
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my: 1 }} onClick={() => setDisplay(9)}>
                  <ListItemButton >
                    Lead Persona
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>


          <ListItem disablePadding onClick={() => setDisplay(10)}>
            <ListItemButton >
              <ListItemIcon>
                <LinkOutlinedIcon />
              </ListItemIcon>
              <Typography sx={display === 10 ? highlightedStyle : normStyle} >
                Integrations
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => setDisplay(11)}>
            <ListItemButton>
              <ListItemIcon>
                <GroupsOutlinedIcon />
              </ListItemIcon>
              <Typography sx={display === 11 ? highlightedStyle : normStyle} >
                Team
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => setDisplay(12)}>
            <ListItemButton>
              <ListItemIcon>
                <ChatOutlinedIcon />
              </ListItemIcon>
              <Typography sx={display === 12 ? highlightedStyle : normStyle} >
                Help/Support
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: 'auto', marginRight: 0 }}>
        <Suspense fallback={<CircularProgress />}>
          {
            display === 1 ? <Dashboard /> :
              display === 2 ? <Intel /> :
                display === 3 ? <Leads /> :
                  display === 4 ? <ManageAll dataList={dataList} setDisplay={setDisplay} /> :
                    display === 5 ? <TrackNewAccount /> :
                      display === 6 ? <BulkImport /> :
                        display === 7 ? <ProductFocus /> :
                          display === 8 ? <IntelPreferences /> :
                            display === 9 ? <LeadPersona /> :
                              display === 10 ? <Integration /> :
                                display === 11 ? <Team /> :
                                  display === 12 ? <HelpSupport /> :
                                    null
          }
        </Suspense>
      </Box>
    </Box >
  );
}
