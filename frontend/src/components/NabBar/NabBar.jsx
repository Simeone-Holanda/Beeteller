import { Box, Divider, Flex, Image, Square, Text } from "@chakra-ui/react";
import { useState } from "react";
import LogoBeeteller from '../../assets/Logo_Beeteller.png'
import Vector from '../../assets/Vector.png'
const NabBar = () => {
    const [language, setLanguage] = useState(true)

    return (
        <Box boxShadow={'0px 4px 20px rgba(0, 0, 0, 0.15)'}>
            <Flex
                maxW={'1170'}
                h={'85px'}
                margin={'auto'}
                display={'fixed'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Flex alignItems={'center'}>
                    <Square>
                        <Image src={LogoBeeteller} w={'120px'} h={'21px'} />
                    </Square>
                    <Divider orientation="horizontal" w="1px" h="45px" bg="#BDBDBD" marginX={'9px'} />
                    <Square color={'cotationGray'}>
                        <Text marginRight={'6px'}>
                            COTAÇÕES
                        </Text>
                        <Image src={Vector} />
                    </Square>
                </Flex>
                {/* TODO: ADICIONAR A LINGUAGEM AO LOCALSTORAGE */}
                <Box onClick={() => setLanguage(prev => !prev)}>
                    <Text cursor={'pointer'}>
                        {language ? 'EN' : 'PT'}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default NabBar;