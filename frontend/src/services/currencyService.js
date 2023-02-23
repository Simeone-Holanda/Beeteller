import { api, requestConfig } from "../utils/config";


// Get historical from 15 days
const getHistoricalCurrency = async (data, params) => {
    let token = localStorage.getItem('token')
    const config = requestConfig("GET", data, token); // token cai aq

    try {
        const res = await fetch(`${api}/currency-data/table/${params.symbol}/${params.quantity}`, config)
        let data = await res.json()
        data.statusCode = res.status
        if (data.token) {
            localStorage.setItem("token", JSON.stringify(data.token));
        }
        return data;
    } catch (error) {
        console.log(error);
    }
};

// Get quote current
const getCurrencyQuote = async (data) => {
    let token = localStorage.getItem('token')
    const config = requestConfig("GET", data, token);

    try {
        const res = await fetch(`${api}/currency-data/card`, config)
        let data = await res.json()
        data.statusCode = res.status
        if (data.token) {
            localStorage.setItem("token", JSON.stringify(data.token));
        }
        return data;
    } catch (error) {
        console.log(error);
    }
};

const authService = {
    getHistoricalCurrency,
    getCurrencyQuote
};

export default authService;