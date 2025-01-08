import { Link } from 'react-router';
import { useContext } from 'react';
import { WhishListContext } from '../context/WhishListProvider';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { whishList } = useContext(WhishListContext);

  return (
    <nav className={styles.navbar}>
        
            <Link className={styles.navbarLink} to='/'>Accueil</Link>
            <Link className={styles.navbarLink} to='/whishlist'>Liste des souhaits <span className={styles.wishlistCount}>({whishList.length})</span></Link> 
    </nav>
  );
}
export default Navbar;