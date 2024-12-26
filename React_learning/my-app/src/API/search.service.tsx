import { searchInArray } from "../utility/utility"

import placesData from '../assets/places.json'

export function getPlaces(key: string) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = searchInArray(key, placesData['citiesInKarnataka'], 'city');
            resolve(data)
        }, 1000)
    })
}