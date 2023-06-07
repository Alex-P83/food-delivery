import { Box, TextField, Typography,Button,Grid,Card,CardContent } from "@mui/material";
import styles from './ShoppingCart.module';
// import { useAppSelector } from "../../store/hooks";
import { useSelector } from "react-redux";
// 
const ShoppingCart = () => {
    const { cardList } = useSelector(state => state.shopsReducer)
    return ( 
        <Box sx={styles.wrapper}>
            <Box component="form" sx={styles.form}>
                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{mb:'30px'}}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{mb:'30px'}}/>
                <TextField id="outlined-basic" label="Phone" variant="outlined"  sx={{mb:'30px'}}/>
                <TextField id="outlined-basic" label="Address" variant="outlined" />
            </Box>
            <Box sx={styles.cart}>
            <Grid container spacing={2}>
                {cardList.map((item,i) => 
                    <Grid item xs={12} key={i}>
                        <Card sx={styles.card}>
                            <CardContent sx={styles.cardContent}>
                                <img src={item.img} alt="" />
                                <Box>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {item.title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                     Price:{item.price}
                                    </Typography>   
                                     <TextField variant="outlined" type="number" InputProps={{ inputProps: { min: 0 } }}/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>                    
                )}
            </Grid>                
            </Box>
            <Box>
                <Typography>Total price:999</Typography>
                <Button variant="contained">Submit</Button>
            </Box>
        </Box>
     );
}
 
export default ShoppingCart;