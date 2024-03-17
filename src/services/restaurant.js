import { get } from "./api";

export const restaurantList = async (city_id = 118) => {
    return get('m/restaurant', {
        city_id
    });
};
