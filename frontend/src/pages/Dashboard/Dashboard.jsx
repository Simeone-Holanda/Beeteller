import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CardCoin from './components/CardCoin/CardCoin'
import SelectCoin from './components/SelectCoin/SelectCoin'
import LoadIcon from '../../assets/load_icon.png'
import TableCoin from "./components/TableCoin/TableCoin";
const Dashboard = () => {
    return (<>
        <Box m={'auto'} maxWidth={'1170px'}>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Text align={'start'} fontSize={'36px'} fontWeight={'bold'}>Moedas</Text>
                <Image src={LoadIcon} alt='Atualizar' w={'22px'} h={'18px'} cursor={'pointer'} />
            </Flex>
            <Flex justifyContent={'space-between'}>
                <CardCoin pairOfCrypton={'BTC / BRL'} value={'5,30'} description={'Dolar turismo'} type={'Dolar'} />
                <CardCoin pairOfCrypton={'BTC / EUR'} value={'3732,09'} type={''} />
                <CardCoin pairOfCrypton={'BTC / USD'} value={'4241,60'} type={''} />
            </Flex>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Text align={'start'} fontSize={'36px'} fontWeight={'bold'}>Cotações</Text>
                <SelectCoin />
            </Flex>
            <TableCoin currencys={
                [
                    {
                        currency: 'Dolár Americano',
                        date: new Date(),
                        min: '5.5451',
                        max: '5.5507',
                        var: 1
                    },
                    {
                        currency: 'Dolár Americano',
                        date: new Date(),
                        min: '5.5451',
                        max: '5.5507',
                        var: -1
                    },
                ]} />
        </Box>
    </>);
}

export default Dashboard;