import React from 'react';
import { Box, Button, Card, CardContent, Typography, CardActions, Grid, Tabs, Tab } from "@mui/material";
import PropTypes from 'prop-types';
import styles from "./Shops.module";
import { BurgerKing, DodoPizza, DominosPizza, Kfc, MacDonalds } from '../../assets/icons';
import {
//   query,
//   collection,
//   orderBy,
//   onSnapshot,
  doc,
  deleteDoc,
  addDoc,
  getDocs,
  collection,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions';
// import { addToCart } from '../../store/slices/shoppingCartSlice';

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
            <Box>{children}</Box>
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
    const [shopListData, setShopListData] = React.useState([]);
    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    React.useEffect(() => {
        const getItems = async () => {
        const data = await getDocs(collection(db, `brand-${value}`));
        setShopListData(data.docs.map((el) => ({ ...el.data() })));
            console.log('Shop Data:',data.docs);
        }
        getItems()    
    }, [value]);


  const handleAddToCart = (item) => {
    // dispatch({type:'ADD_TO_CART', payload: item})
    dispatch(addToCart(item))
  }

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
                <TabPanel value={value} index={value}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {shopListData.map((item,i) => (
                                <Grid item xs={4} key={i}>
                                    <Card sx={styles.card}>
                                        <CardContent>
                                            <img src={item.img} alt="" />
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {item.title}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {item.price}₴
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{justifyContent:'flex-end'}}>
                                            <Button size="small" variant="contained" onClick={() => handleAddToCart(item)}>Add to cart</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </TabPanel> 
                {/* <TabPanel value={value} index={1}>
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
                </TabPanel>                  */}
            </Box>
        </Box> 
    );
}
 
export default Shops;