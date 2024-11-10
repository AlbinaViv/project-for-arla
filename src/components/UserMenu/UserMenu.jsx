import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';
import myImage from './img/defaultavatar.jpg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.nav}>
      <p className={css.username}>Welcome, {user.name}</p>
      <img
        className={css.avatar}
        src={myImage}
        alt="photo user"
        width="30"
        height="30"
      />

      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
