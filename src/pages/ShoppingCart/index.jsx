import {useEffect, useState} from 'react';
import { Box, TextField, Typography,Button,Grid,Card,CardContent } from "@mui/material";
import styles from './ShoppingCart.module';
import { useSelector } from "react-redux";
// 
import {
  addDoc,
  collection,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { cleanCart } from '../../store/actions';


const ShoppingCart = () => {
    const { cardList } = useSelector(state => state.shopsReducer);
    const [inputName,setInputName] = useState('');
    const [inputEmail,setInputEmail] = useState('');
    const [inputPhone,setInputPhone] = useState(''); 
    const [inputAddress,setInputAddress] = useState('');
    const [quantityArr, setQuantityArr] = useState(new Array(cardList.length).fill(1));
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();

    const totalPriceCounter = () => {
        const sum = cardList.reduce((accumulator,element,i) => accumulator + element.price*quantityArr[i],0)
        setTotalPrice(sum)
    }

    const productCounter = (e, i) =>{
        let newArr = [...quantityArr];
        newArr[i] = +e.target.value;
        setQuantityArr(newArr);  
        totalPriceCounter(i)    
    }

    const handleChange = (e,inputItem)=>{
        inputItem(e.target.value);
    }

    const addOrder = async () => {
        await addDoc(collection(db, "orders"), {
            name:inputName,
            email:inputEmail,
            phone:inputPhone,
            adress:inputAddress,
            totalPrice: totalPrice,
            cardList 
        });
    }

    const submitOrder = () => {
        addOrder()
        dispatch(cleanCart())
        setTotalPrice(0)
        setInputAddress('')
        setInputEmail('')
        setInputName('')
        setInputPhone('')
    }
    useEffect(() => {
        totalPriceCounter()
    }, [quantityArr]);    

    const dep = (!inputEmail || !inputName || !inputPhone || !inputAddress);

    return ( 
        <Box sx={styles.wrapper}>
            <Box component="form" sx={styles.form}>
                <TextField required id="outlined-basic" label="Name" variant="outlined" sx={{mb:'30px'}} onChange={(e) => handleChange(e, setInputName)} value={inputName}/>
                <TextField required id="outlined-basic" label="Email" variant="outlined" sx={{mb:'30px'}} onChange={(e) => handleChange(e, setInputEmail)} value={inputEmail}/>
                <TextField required id="outlined-basic" label="Phone" variant="outlined"  sx={{mb:'30px'}} onChange={(e) => handleChange(e, setInputPhone)} value={inputPhone}/>
                <TextField required id="outlined-basic" label="Address" variant="outlined"  onChange={(e) => handleChange(e, setInputAddress)} value={inputAddress}/>
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
                                    <TextField variant="outlined" type="number" InputProps={{ inputProps: { min: 0 } }} onChange={(e) => productCounter(e,i)} value={quantityArr[i]}/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>                    
                )}
            </Grid>                
            </Box>
            <Box sx={styles.shoppingCartAction}>
                <Typography mr={'10px'}>Total price:{totalPrice}</Typography>
                <Button variant="contained" onClick={submitOrder} disabled={dep}>Submit</Button>
            </Box>
        </Box>
     );
}
 
export default ShoppingCart;