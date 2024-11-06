import { useEffect, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from '../PrivateRoute';
import { Layout } from '../Layout';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import { RestrictedRoute } from '../RestrictedRoute';
import css from './App.module.css';

const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const Dashboard = lazy(() => import('../../pages/Dashboard'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth(); // Додаємо isLoggedIn

  // Оновлення користувача при першому рендері
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Зміна фону на сірий після логінації
  useEffect(() => {
    if (isLoggedIn) {
      document.body.classList.add('gray-background');
    } else {
      document.body.classList.remove('gray-background');
    }
  }, [isLoggedIn]);

  return isRefreshing ? (
    <b>Refreshing user...</b> // Показуємо повідомлення, поки відбувається оновлення
  ) : (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Navigate to="/register" replace />} // Перенаправлення на сторінку реєстрації
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/dashboard"
                  component={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <RegisterPage />
                    </motion.div>
                  }
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/dashboard"
                  component={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <LoginPage />
                    </motion.div>
                  }
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Dashboard />
                    </motion.div>
                  }
                />
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
};
