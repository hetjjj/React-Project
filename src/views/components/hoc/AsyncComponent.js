import React from 'react';
import Loadable from 'react-loadable';

const BlogPage = Loadable({
    loader: () => import('../../pages/BlogPage'),
    loading() {
        return <div>Loading...</div>
    }
})

export { BlogPage }