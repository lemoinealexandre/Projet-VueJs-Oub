import { timeout } from './Utils';

export async function getImageRestaurantRandom() {
    await timeout(300);
    const res =  await fetch('https://picsum.photos/200/300');
    const blob = res.blob();
    return URL.createObjectURL(blob);
}