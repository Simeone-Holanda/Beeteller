import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CardCoin from './components/CardCoin/CardCoin'
import SelectCoin from './components/SelectCoin/SelectCoin'
import LoadIcon from '../../assets/load_icon.png'
import TableCoin from "./components/TableCoin/TableCoin";
import { useEffect, useState } from "react";
import currencyService from '../../services/currencyService'

const Dashboard = () => {

    const [dataTable, setDataTable] = useState([])

    const [cards, setCards] = useState([
        { symbol: 'USDBRL', pairOfCrypton: 'BRL / USD', value: '0,00', description: 'Dolar turismo', type: 'Dolar' },
        { symbol: 'BTCEUR', pairOfCrypton: 'BTC / EUR', value: '0,00', description: '', type: 'Bitcoin' },
        { symbol: 'BTCUSD', pairOfCrypton: 'BTC / USD', value: '0,00', description: '', type: 'Bitcoin' }
    ])

    async function getDataTable() {
        return await currencyService.getHistoricalCurrency()
    }

    async function getDataCard() {
        return await currencyService.getCurrencyQuote()
    }

    async function handleClick(e) {
        e.preventDefault()
        // setUpdateCard(prev => !prev)
        let cardsData = await getDataCard()
        let newCarsds = cards.map(card => {
            return { ...card, value: cardsData['data'][card.symbol]['bid'] }
        })
        setCards(newCarsds)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                let table = await getDataTable()
                let cardsData = await getDataCard()
                let newCarsds = cards.map(card => {
                    return { ...card, value: cardsData['data'][card.symbol]['bid'] }
                })
                setCards(newCarsds)
                setDataTable(table['data'])
            } catch (error) {
                console.log(error)
                alert('Algo deu errado! ')
            }

        }
        fetchData()
    }, [])

    return (<>
        <Box m={'auto'} maxWidth={'1170px'}>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                marginY={'30px'}
            >
                <Text align={'start'} fontSize={'36px'} fontWeight={'bold'} color={'text'}>Moedas</Text>
                <Image src={LoadIcon} alt='Atualizar' w={'22px'} h={'18px'} cursor={'pointer'} onClick={handleClick} />
            </Flex>

            <Flex justifyContent={'space-between'}>
                {cards.map(card => (
                    <CardCoin
                        pairOfCrypton={card.pairOfCrypton}
                        value={card.value}
                        description={card.description}
                        type={card.type} />
                ))}
            </Flex>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                marginY={'30px'}
            >
                <Text align={'start'} fontSize={'36px'} fontWeight={'bold'}>Cotações</Text>
                <SelectCoin />
            </Flex>
            <TableCoin currencys={dataTable} />
        </Box>
    </>);
}

export default Dashboard;