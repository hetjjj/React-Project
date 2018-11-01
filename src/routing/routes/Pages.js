import AppRootPage from '../../views/pages/AppRootPage';
import HomePage from '../../views/pages/HomePage';
import IntroductionPage from '../../views/pages/IntroductionPage';

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
            }
        ]
    }
]