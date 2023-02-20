import { Flex, Image, Square, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import IconOrdem from '../../../../assets/button_icon.png'
import DolarIcon from '../../../../assets/dolar_icon.png'
import dayjs from 'dayjs';

const TableCoin = ({ currencys }) => {
    console.log(currencys)

    function variation(value) {
        return (
            <Square
                w={'66px'}
                h={'37px'}
                bg={value > 0 ? 'yellowButton' : 'grayDivTable'}
                borderRadius={'8px'}>
                <Flex>
                    <Text fontSize={'18px'} fontWeight={'bold'}>
                        {value > 0 ? '+' : '-'}{Math.abs(value)}
                    </Text>
                    <Text fontSize={'18px'}>
                        %
                    </Text>
                </Flex>

            </Square>
        )
    }

    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>
                        <Flex
                            w={'100%'}
                            align={'center'}>
                            Moeda
                            <Image src={IconOrdem} cursor={'pointer'} />
                        </Flex>
                    </Th>
                    <Th>
                        <Flex
                            w={'100%'}
                            justifyContent={'center'}
                            align={'center'}>
                            Mínima
                            <Image src={IconOrdem} cursor={'pointer'} />
                        </Flex>
                    </Th>
                    <Th>
                        <Flex
                            w={'100%'}
                            align={'center'}>
                            Máxima
                            <Image src={IconOrdem} cursor={'pointer'} />
                        </Flex>
                    </Th>
                    <Th>
                        <Flex
                            w={'100%'}
                            justifyContent={'flex-end'}
                            align={'center'}>
                            Variação
                            <Image src={IconOrdem} cursor={'pointer'} />
                        </Flex>
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                {currencys ? currencys.map(e => <Tr>
                    <Td>
                        <Flex>
                            <Square>
                                <Image src={DolarIcon} />
                            </Square>
                            <Square marginLeft={'9px'}>
                                <Flex direction={'column'}>
                                    <Text color={'text'} fontSize={'18px'} fontWeight={'bold'}>
                                        {currencys[0].name}
                                    </Text>
                                    <Text color={'softGray'} fontSize={'18px'}>
                                        {dayjs(new Date(parseInt(e.timestamp) * 1000)).format('DD/MM/YYYY')}
                                    </Text>
                                </Flex>
                            </Square>
                        </Flex>
                    </Td>
                    <Td>
                        <Flex
                            w={'100%'}
                            justifyContent={'center'}
                            align={'center'}>
                            <Text fontWeight={'bold'}>
                                {e.low}
                            </Text>
                        </Flex>
                    </Td>
                    <Td>
                        <Flex
                            w={'100%'}
                            align={'center'}>
                            <Text fontWeight={'bold'}>
                                {e.high}
                            </Text>
                        </Flex>
                    </Td>
                    <Td>
                        <Flex
                            w={'100%'}
                            justifyContent={'flex-end'}
                            align={'center'}>
                            <Text fontWeight={'bold'}>
                                {variation(parseFloat(e.pctChange))}
                            </Text>
                        </Flex>
                    </Td>
                </Tr>)
                    : <Tr></Tr>}
            </Tbody >
        </Table >
    );
}

export default TableCoin;