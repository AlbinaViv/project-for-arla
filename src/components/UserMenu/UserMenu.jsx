import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';
import myImage from './img/defaultavatar.jpg';
import { useState } from 'react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  /// Farmer information
  const farmerInfo = {
    name: 'Ivan Petrenko',
    email: 'ivan.petrenko@farmers.com',
    bio: 'An experienced farmer with over 15 years of expertise in dairy production. Committed to implementing modern technologies to enhance efficiency and product quality.',
    location: 'Green Village, Denmark',

    goals:
      'Maintain environmentally friendly production and expand market access.',
  };

  // Відкриття та закриття модального вікна
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className={css.nav}>
      <p className={css.username}>Welcome, {user.name}</p>
      <div className={css.btAvatar}>
        <img
          className={css.avatar}
          src={myImage}
          alt="photo user"
          width="30"
          height="30"
          onClick={openModal} // викликає функцію відкриття модального вікна
          aria-label="Open modal"
        />
      </div>
      {isOpen && (
        <div className={css.modalBackdrop} onClick={closeModal}>
          <div className={css.modalContent} onClick={e => e.stopPropagation()}>
            {/* Кнопка закриття */}
            <button className={css.closeButton} onClick={closeModal}>
              ✖
            </button>

            {/* Інформація про користувача */}
            <div className={css.userDetails}>
              <h2 className={css.strong}>{farmerInfo.name}</h2>
              <ul className={css.strong}>
                <li>
                  <strong>Location:</strong>
                  {farmerInfo.location}
                </li>
                <li>
                  <strong>Goals:</strong>
                  {farmerInfo.goals}
                </li>
                <li>
                  <strong>Email:</strong> {farmerInfo.email}
                </li>
                <li>
                  <strong>About:</strong> {farmerInfo.bio}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

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
