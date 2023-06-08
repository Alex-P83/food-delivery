import React from 'react';
import { Box, Button, Card, CardContent, Typography, CardActions, Grid, Tabs, Tab } from "@mui/material";
import PropTypes from 'prop-types';
import styles from "./Shops.module";
import { BurgerKing, DunkinDonuts, DominosPizza, Kfc, MacDonalds } from '../../assets/icons';
import {
  getDocs,
  collection,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions';

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
                    <Tab label="McDonald's" icon={<MacDonalds height="30px" width="30px"/>}  sx={styles.tabItem} {...a11yProps(0)} iconPosition="end" disableRipple/>
                    <Tab icon={<DominosPizza height="30px" width="30px"/>} label="Domino's Pizza" sx={styles.tabItem} {...a11yProps(1)} iconPosition="end" disableRipple/>
                    <Tab icon={<Kfc height="30px" width="30px"/>} label="KFC (Kentucky Fried Chicken)" sx={styles.tabItem} {...a11yProps(2)} iconPosition="end" disableRipple/>
                    <Tab icon={<DunkinDonuts height="40px" width="50px"/>} label="Dunkin Donuts" sx={styles.tabItem} {...a11yProps(3)} iconPosition="end" disableRipple/>
                    <Tab icon={<BurgerKing height="30px" width="30px"/>} label="Burger King (BK)" sx={styles.tabItem} {...a11yProps(4)} iconPosition="end" disableRipple/>
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
            </Box>
        </Box> 
    );
}
 
export default Shops;