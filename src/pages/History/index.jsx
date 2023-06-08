import React, { useState } from "react";
import { Box, TextField, Grid, Card, CardContent,Typography } from "@mui/material";

import styles from './History.module';

import {
  getDocs,
  collection,
} from 'firebase/firestore';
import { db } from '../../firebase';

const History = () => {
    const [orderList, setOrderList] = useState([]);

    React.useEffect(() => {
        const getItems = async () => {
            const data = await getDocs(collection(db, 'orders'));
            setOrderList(data.docs.map((el) => ({ ...el.data() })));
        }
        getItems()    
    }, []);    
    console.log(orderList);
    return ( 
        <Box sx={styles.wrapper}>
            <Box component="form" sx={styles.form}>
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={styles.input}/>
                <TextField id="outlined-basic" label="Phone" variant="outlined" sx={styles.input} />
            </Box>
            <Box sx={styles.historyList}>
                    {orderList.map((item,i) => (
                        <Box display={'flex'} key={i} sx={styles.historyItem} mb={3}>
                            <Grid container spacing={2}>
                                {item.cardList.map((item,i)=>(
                                    <Grid item xs={4} key={i}>
                                        <Card sx={styles.card}>
                                            <CardContent sx={styles.cardContent}>
                                                <img src={item.img} alt="" />
                                                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} flexGrow={1}>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    {item.title}
                                                    </Typography>
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                    {item.price}₴
                                                    </Typography>                                                    
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>                            
                                ))}
                            </Grid>
                            <Box sx={styles.historyTotalPrice}>
                               <Typography>TotalPrice: {item.totalPrice}</Typography>  
                            </Box>                
                        </Box>
                    ))}                 
            </Box>
        </Box>
     );
}
 
export default History;