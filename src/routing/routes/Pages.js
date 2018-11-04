import AppRootPage from '../../views/pages/AppRootPage';
import HomePage from '../../views/pages/HomePage';
import IntroductionPage from '../../views/pages/IntroductionPage';
import NotFoundPage from '../../views/pages/NotFoundPage';
import { BlogPage } from '../../views/components/hoc/AsyncComponent';

export default [
    {
        component: AppRootPage,
        routes: [
            {
                path: '/',
                component: HomePage,
                exact: true
            },
            {
                path: '/introduction',
                component: IntroductionPage
            },
            {
                path: '/blog',
                component: BlogPage
            },
            {
                component: NotFoundPage
            }
        ]
    }
]