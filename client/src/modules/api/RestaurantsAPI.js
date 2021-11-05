import Restaurant from '../modeles/Restaurant';
import { get } from './API';

export async function getRestaurants(params) {
    const res = await get('restaurants', params);
    return { count: res.count, restaurants: Restaurant.convertsToRestaurant(res.data ?? []) };
}

export async function getRestaurantsCount() {
    return (await get('restaurants/count')).data;
}


export async function getRestaurantById(id) {
    return Restaurant.convertToRestaurant((await get(`restaurants/${id}`)).restaurant);
}