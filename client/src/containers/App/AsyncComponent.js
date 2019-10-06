import loadable from 'react-loadable';

export const AsyncDashboard = loadable({
    loader: () => import('./../Dashboard'),
    loading: true
});