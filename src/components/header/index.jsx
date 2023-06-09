import { Link } from "react-router-dom";
import { List, ListItem, ListItemButton } from "@mui/material";
import styles from './Header.module';

const Header = () => {
    return ( 
        <List sx={styles.nav}>
          <ListItem disablePadding sx={styles.navItem}>
            <ListItemButton sx={styles.linkItem}>
                <Link to="/">Shops</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={styles.navItem}>
            <ListItemButton sx={styles.linkItem}>
                <Link to="/shopping-card">Shopping card</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={styles.navItem}>
            <ListItemButton sx={styles.linkItem}>
                <Link to="/history">History</Link>
            </ListItemButton>
          </ListItem> 
          <ListItem disablePadding sx={styles.navItem}>
            <ListItemButton sx={styles.linkItem}>
                <Link to="/coupons">Coupons</Link>
            </ListItemButton>
          </ListItem>                    
        </List>        
     );
}
 
export default Header;