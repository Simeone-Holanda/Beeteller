import { Flex, Image, Square, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import IconOrdem from '../../../../assets/button_icon.png'
import DolarIcon from '../../../../assets/dolar_icon.png'
import { i18n } from '../../../../translate/i18n'
import dayjs from 'dayjs';
import { useEffect, useState } from "react";

const TableCoin = ({ currencys, dataOrder }) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        setData(currencys)
    }, [currencys])

    function variation(value) {
        return (
            <Square
                w={'66px'}
                h={'37px'}
                bg={value > 0 ? 'yellowButton' : 'grayDivTable'}
                borderRadius={'8px'}>
                <Flex>
                    <Text fontSize={'18px'}>
                        {value > 0 ? '+' : '-'}{Math.abs(value)}
                    </Text>
                    <Text fontSize={'18px'}>
                        %
                    </Text>
                </Flex>
            </Square>
        )
    }

    console.log(currencys)

    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>
                        <Flex
                            w={'100%'}
                            align={'center'}>
                            {i18n.t('table.coin')}
                            <Image src={IconOrdem} cursor={'pointer'} onClick={() => dataOrder('timestamp', data)} />
                        </Flex>
                    </Th>
                    <Th>
                        <Flex
                            w={'100%'}
                            justifyContent={'center'}
                            align={'center'}>
                            {i18n.t('table.min')}
                            <Image src={IconOrdem} cursor={'pointer'} onClick={() => dataOrder('low', data)} />
                        </Flex>
                    </Th>
                    <Th>
                        <Flex
                            w={'100%'}
                            align={'center'}>
                            {i18n.t('table.max')}
                            <Image src={IconOrdem} cursor={'pointer'} onClick={() => dataOrder('high', data)} />
                        </Flex>
                    </Th>
                    <Th>
                        <Flex
                            w={'100%'}
                            justifyContent={'flex-end'}
                            align={'center'}>
                            {i18n.t('table.variation')}
                            <Image src={IconOrdem} cursor={'pointer'} onClick={() => dataOrder('varBid', data)} />
                        </Flex>
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                {data ? data.map((e, indice) => <Tr key={indice}>
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
                            {variation(parseFloat(e.pctChange))}
                        </Flex>
                    </Td>
                </Tr>)
                    : <Tr></Tr>}
            </Tbody >
        </Table >
    );
}

export default TableCoin;