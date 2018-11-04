import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta property="og:title" content="Users App"/>
            </Helmet>
        </div>
    )
}

export default Home;