import { Select } from "@chakra-ui/react";
import { useState } from "react";

const SelectCoin = ({ selectCurrency }) => {
    const [currency, setCurrency] = useState('Dolar Americano')

    function handleSelection(e) {
        selectCurrency(e.target.value)
    }

    return (
        <Select
            onChange={handleSelection}
            cursor={'pointer'}
            w={'189px'}
            h={'40px'}
            defaultValue={'Dolar Americano'}
        // _focus={{ boxShadow: "none" }}
        >
            <option value="Dolar Americano">Dolar Americano</option>
            <option value="Euro">Euro</option>
            <option value="Bitcoin">Bitcoin</option>
        </Select>
    );
}

export default SelectCoin;