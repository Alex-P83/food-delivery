import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
// import { Header } from '';
import Header from '../header/index'; 
import styles from './Layout.module';

const Layout = () => {
    return ( 
        <>
            <Box sx={styles.container}>
                <Header />           
                <Outlet />
            </Box>
        </>
     );
}
 
export default Layout;