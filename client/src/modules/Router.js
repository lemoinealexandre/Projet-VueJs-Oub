import Accueil from '../components/pages/accueil/Accueil';
import GestionRestaurants from '../components/pages/gestionRestaurants/GestionRestaurants';
import FindRestaurants from '../components/pages/findRestaurants/FindRestaurants';
import RestaurantDetails from '../components/pages/restaurant/RestaurantDetails'
import SearchRestaurant from '../components/pages/gestionRestaurants/SearchRestaurant';
import AddRestaurant from '../components/pages/gestionRestaurants/AddRestaurant';
import VueRouter from 'vue-router';

const routes = new VueRouter({
    routes: [
        {
            path: '/',
            component: Accueil,
        },
        {
            path: '/restaurants',
            component: GestionRestaurants,
            children: [
                {
                    path: '',
                    component: SearchRestaurant
                },
                {
                    path: 'ajouter',
                    component: AddRestaurant
                },
                
            ]
        },
        {
            path: '/restaurant/:id',
            component: RestaurantDetails,
        },
        {
            path: '/trouver',
            component: FindRestaurants,
            /* children: [
                {
                    path: '/',
                    component: ,
                },
                {
                    path: '/:id',
                    component: ,
                },
                {
                    path: '*',
                    redirect: '/',
                }
            ] */
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    mode: 'history'
});

export default routes;