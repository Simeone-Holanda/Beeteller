import { Select } from "@chakra-ui/react";
import { useState } from "react";

const SelectCoin = () => {
    const [currency, setCurrency] = useState('Dolar Americano')

    function handleSelection(e) {
        setCurrency(e.target.value)
    }

    console.log(currency)


    return (
        <Select
            border={'none'}
            onChange={handleSelection}
            cursor={'pointer'}
            w={'189px'}
            h={'40px'}
        // _focus={{ boxShadow: "none" }}
        >
            <option value="Dolar Americano" selected>Dolar Americano</option>
            <option value="Euro">Euro</option>
            <option value="Bitcoin">Bitcoin</option>
        </Select>
    );
}

export default SelectCoin;