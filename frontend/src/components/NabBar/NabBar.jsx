import { Box, Divider, Flex, Image, Select, Square, Text } from "@chakra-ui/react";
import { useState } from "react";
import LogoBeeteller from '../../assets/Logo_Beeteller.png'
import Vector from '../../assets/Vector.png'
import { i18n } from '../../translate/i18n';

const I18N_STORAGE_KEY = 'i18nextLng'

const NabBar = () => {
    const [language, setLanguage] = useState(localStorage.getItem(I18N_STORAGE_KEY))

    function handleLanguageChange(event) {
        localStorage.setItem(
            I18N_STORAGE_KEY, event.target.value
        )
        i18n.changeLanguage(event.target.value)
        window.location = window.location
    }

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
                <Box>
                    <Select defaultValue={language} cursor={'pointer'} onChange={handleLanguageChange}>
                        <option value={'en'}>EN</option>
                        <option value={'pt'}>PT</option>
                    </Select>
                </Box>
            </Flex>
        </Box>
    );
}

export default NabBar;