import { get } from "./api";

export const restaurantList = async (city_id = 118) => {
    return get('m/restaurant', {
        city_id
    });
};


export const restaurantDetail = async (restaurant_uuid) => {
    return get('m/restaurant', {
        restaurant_uuid
    });
};