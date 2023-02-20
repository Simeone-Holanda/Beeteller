import { Box, Flex, Image, Square, Text } from "@chakra-ui/react";
import DolarIcon from '../../../../assets/dolar_icon.png'
import BitcoinIcon from '../../../../assets/btc_icon.png'

const CardCoin = ({ pairOfCrypton, value, description, type }) => {
    console.log({ pairOfCrypton, value, description, type })
    return (
        <Flex
            w={'369px'}
            height={'189px'}
            boxShadow={'0px 4px 20px rgba(0, 0, 0, 0.15);'}
            borderRadius={'8px'}
            alignItems={'flex-start'}
        >
            <Flex
                direction={'column'}
                w={'50%'}
                h={'100%'}
                padding={'24px'}
                justifyContent={description ? 'space-between' : 'space-around'}

            // alignItems={'flex-start'}
            >

                <Text color={'text'} fontWeight={'bold'}>
                    {pairOfCrypton}
                </Text>
                <Flex alignItems={'flex-start'}>
                    <Flex align={'center'}>
                        <Text color={'softGray'} fontSize={'18px'} fontWeight={'bold'}>
                            R$
                        </Text>
                        &nbsp;&nbsp;
                        <Text color={'text'} fontSize={'48px'} fontWeight={'bold'}>
                            {value}
                        </Text>
                    </Flex>
                </Flex>
                {description ?
                    <Text color={'softGray'} fontSize={'14px'}>
                        {description}
                    </Text> : <></>}
            </Flex>
            <Flex
                width={'50%'}
                justifyContent={'flex-end'}>
                {type === 'Dolar' ?
                    <Image src={DolarIcon} alt={'Dolar'} padding={'20px'} /> :
                    <Image src={BitcoinIcon} alt={'Bitcoin'} padding={'20px'} />}
            </Flex>
        </Flex>
    );
}

export default CardCoin;