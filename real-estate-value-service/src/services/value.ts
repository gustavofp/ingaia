import cache from '../config/redis'
import axios from 'axios'

const getSquareMeterValue = async () => {
    const { data } = await axios.get('http://square_meter_value_service:3000/square-meter/value/604f4e513c9ef0811c3724c3')
    return data.price;
}

const setCache = async (meters: number, value: number, price: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        const key: string = `${meters}-${value}`
        const priceString: string = price.toString()
        return cache.set(key, priceString, (err) => {
            if (err) reject(err)
            resolve()
        })
    })
}

const getCache = async (meters: number, value: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        const key: string = `${meters}-${value}`
        cache.get(key, (err, value) => {
            if (err) reject(err)
            const price: number = Number(value)

            resolve(price)
        })
    })
}


export default {
    getSquareMeterValue,
    setCache,
    getCache
}