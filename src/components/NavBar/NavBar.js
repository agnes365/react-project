import styles from './NavBar.module.scss';
import Container from '../Container/Container'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.elements}>
                    <Link to="/"><span className={styles.icon + ' fa fa-tasks'} /></Link>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive && styles.linkActive}to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive && styles.linkActive}to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive && styles.linkActive}to="/about">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
};

export default NavBar;