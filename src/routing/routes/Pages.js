import HomePage from '../../views/pages/HomePage';
import IntroductionPage from '../../views/pages/IntroductionPage';

export default [
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