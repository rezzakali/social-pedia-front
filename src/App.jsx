import React, { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import useAuthCheck from './hooks/useAuthCheck';
import Home from './pages/Home';
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
      <div className="bg-[#f0f2f5] dark:bg-[#18191a]">
        <Layout>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
      <Toaster position="bottom-right" />
    </Fragment>
  );
};

export default App;
