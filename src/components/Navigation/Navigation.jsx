import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import css from './Navigation.module.css';
import { SearchBox } from '../SearchBox/SearchBox';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  return (
    <nav className={css.nav}>
      {isLoggedIn && (
        <>
          <SearchBox />
          <NavLink className={css.dashboard} to="/dashboard">
            Dashboard
          </NavLink>
        </>
      )}
      {isLoggedIn && <UserMenu />}
    </nav>
  );
};
