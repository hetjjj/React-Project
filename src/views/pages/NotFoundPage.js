import React from 'react';

const NotFoundPage = ({staticContext = {}}) => {
    staticContext.notFound = true;
    return <h1 style={{color: 'red'}}>Ooops, route not found.</h1>
}

export default NotFoundPage;