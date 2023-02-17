import { Box, Button, Container, Flex, Image, Square, Text } from "@chakra-ui/react";
import CardCoin from './components/CardCoin/CardCoin'
import LoadIcon from '../../assets/load_icon.png'
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

        </Box>
    </>);
}

export default Dashboard;