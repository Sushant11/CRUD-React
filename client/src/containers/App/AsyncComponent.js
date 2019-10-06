import loadable from 'react-loadable';
import LoadingComponent from '../../components/Loading'

export const AsyncDashboard = loadable({
    loader: () => import('./../Dashboard'),
    loading: LoadingComponent
});