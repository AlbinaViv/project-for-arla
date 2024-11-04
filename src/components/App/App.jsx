import { useEffect, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
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
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* <Home /> */}
                </motion.div>
              }
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
