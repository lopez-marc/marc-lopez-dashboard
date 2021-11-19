import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route/base';


const Dashboard = () => {
    useEffect(() => {
        if (window.location.pathname.match(/^\/dashboard\/?$/)) {
          navigate('/dashboard/login', { replace: true });
        }
      }, [window.location.pathname]);
    return (
        <Layout>
            <Profile />
            <Router>
                {/* <RouteLogin path="/dashboard/login" showModal={showModal} /> */}
                {/* <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
                <PrivateRoute path="/dashboard/base" component={RouteBase} /> */}
            </Router>
        </Layout>
    )
}

export default Dashboard;