import React from 'react';
import { Box, List, ListItem, Button, Card, CardContent, Typography, CardActions, Grid, Tabs, Tab } from "@mui/material";
import PropTypes from 'prop-types';
import styles from "./Shops.module";
import { BurgerKing, DodoPizza, DominosPizza, Kfc, MacDonalds } from '../../assets/icons';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Shops = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };   
    return ( 
        <Box sx={styles.shopWrapper}>
            <Box sx={styles.shopSidebar}>
                <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example"
                orientation="vertical"
                variant="scrollable"
                sx={styles.indicator}               
                >
                    <Tab label="McDonald's" icon={<MacDonalds/>}  sx={styles.tabItem} {...a11yProps(0)} iconPosition="end" disableRipple/>
                    <Tab icon={<DominosPizza/>} label="Domino's Pizza" sx={styles.tabItem} {...a11yProps(1)} iconPosition="end" disableRipple/>
                    <Tab icon={<Kfc/>} label="KFC (Kentucky Fried Chicken)" sx={styles.tabItem} {...a11yProps(2)} iconPosition="end" disableRipple/>
                    <Tab icon={<DodoPizza/>} label="Dodo Pizza" sx={styles.tabItem} {...a11yProps(3)} iconPosition="end" disableRipple/>
                    <Tab icon={<BurgerKing/>} label="Burger King (BK)" sx={styles.tabItem} {...a11yProps(4)} iconPosition="end" disableRipple/>
                </Tabs>                         
            </Box>
            <Box sx={styles.shopContent}>
                <TabPanel value={value} index={0}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day 1
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                        </Typography>
                                        <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day 2
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                        </Typography>
                                        <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day 3
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                        </Typography>
                                        <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel> 
                <TabPanel value={value} index={3}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day 2
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                        </Typography>
                                        <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day 3
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                        </Typography>
                                        <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>                 
            </Box>
        </Box> 
    );
}
 
export default Shops;