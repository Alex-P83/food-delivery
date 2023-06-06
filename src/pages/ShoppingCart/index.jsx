import { Box, TextField, Typography,Button,Grid,Card,CardContent,CardActions } from "@mui/material";
import styles from './ShoppingCart.module';

const ShoppingCart = () => {
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
            <Box>
                <Typography>Total price:999</Typography>
                <Button variant="contained">Submit</Button>
            </Box>
        </Box>
     );
}
 
export default ShoppingCart;