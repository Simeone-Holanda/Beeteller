import { api, requestConfig } from "../utils/config";


// Get historical from 15 days
const getHistoricalCurrency = async (data, token) => {
    const config = requestConfig("GET", data); // token cai aq

    try {
        const res = await fetch(`${api}/currency-data/table`, config)
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
const getCurrencyQuote = async (data, token) => {
    const config = requestConfig("GET", data); // token cai aq

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