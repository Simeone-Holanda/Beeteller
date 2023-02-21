import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CardCoin from './components/CardCoin/CardCoin'
import SelectCoin from './components/SelectCoin/SelectCoin'
import LoadIcon from '../../assets/load_icon.png'
import TableCoin from "./components/TableCoin/TableCoin";
import { useEffect, useState } from "react";
import currencyService from '../../services/currencyService'
import { i18n } from '../../translate/i18n'

const Dashboard = () => {

    const [dataTable, setDataTable] = useState([])
    const [orders, setOrders] = useState({
        timestamp: true, low: true, high: true, varBid: true
    })

    const [cards, setCards] = useState([
        { symbol: 'USDBRL', pairOfCrypton: 'BRL / USD', value: '0,00', description: 'Dolar turismo', type: 'Dolar' },
        { symbol: 'BTCEUR', pairOfCrypton: 'BTC / EUR', value: '0,00', description: '', type: 'Bitcoin' },
        { symbol: 'BTCUSD', pairOfCrypton: 'BTC / USD', value: '0,00', description: '', type: 'Bitcoin' }
    ])

    async function getDataTable(symbol, quantity) {
        return await currencyService.getHistoricalCurrency(null, { symbol, quantity })
    }

    async function getDataCard() {
        return await currencyService.getCurrencyQuote()
    }

    function dataOrder(column) {
        let newData = dataTable.slice().sort((a, b) => {
            if (a[column] < b[column]) {
                return -1;
            }
            if (a[column] > b[column]) {
                return 1;
            }
            return 0;
        })

        if (orders[column]) {
            newData[0].name = dataTable[0].name
            setDataTable(newData)
        } else {
            newData = newData.reverse()
            newData[0].name = dataTable[0].name
            setDataTable(newData)
        }

        setOrders({ ...orders, [column]: !orders[column] })
    }

    async function handleClickUpdate(e) {
        e.preventDefault()
        // setUpdateCard(prev => !prev)
        let cardsData = await getDataCard()
        let newCarsds = cards.map(card => {
            return { ...card, value: cardsData['data'][card.symbol]['bid'] }
        })
        setCards(newCarsds)
    }

    async function handleSelectCurrency(currency) {
        // setUpdateCard(prev => !prev)
        let table = ''
        if (currency === 'Dolar Americano') {
            table = await getDataTable('USD-BRL', 15)
        } else if (currency === 'Euro') {
            table = await getDataTable('BTC-EUR', 15)
        } else if (currency === 'Bitcoin') {
            table = await getDataTable('BTC-USD', 15)
        }
        setDataTable(table['data'])
    }

    useEffect(() => {
        async function fetchData() {
            try {
                let table = await getDataTable('USD-BRL', 15)
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
                <Text
                    align={'start'}
                    fontSize={'36px'}
                    fontWeight={'bold'}
                    color={'text'}>
                    {i18n.t('dashboard.coins')}
                </Text>
                <Image src={LoadIcon} alt='Atualizar' w={'22px'} h={'18px'} cursor={'pointer'} onClick={handleClickUpdate} />
            </Flex>

            <Flex justifyContent={'space-between'}>
                {cards.map((card, index) => (
                    <CardCoin
                        key={index}
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
                <Text align={'start'} fontSize={'36px'} fontWeight={'bold'}>
                    {i18n.t('dashboard.quotation')}
                </Text>
                <SelectCoin selectCurrency={handleSelectCurrency} />
            </Flex>
            <TableCoin currencys={dataTable} dataOrder={dataOrder} />
        </Box>
    </>);
}

export default Dashboard;