import React, { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import useAuthCheck from './hooks/useAuthCheck';
import Friend from './pages/Friend';
import Home from './pages/Home/index';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './protect_routes/Not-Found';
import PrivateRoute from './protect_routes/PrivateRoute';
import PublicRoute from './protect_routes/PublicRoute';

const App = () => {
  const isAuth = useAuthCheck();
  const { token, user } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {token !== null && user !== null && user?._id && <Navigation />}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path={`/home/:id`}
          element={
            <PrivateRoute>
              <Friend />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right" />
    </Fragment>
  );
};

export default App;
