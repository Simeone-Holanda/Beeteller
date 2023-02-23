import { Box, Button, Flex, Image, Input, Square, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScreenLogin from '../../assets/ScreenLogin.png'
import { AuthContext } from '../../contexts/AuthContext'
import authService from '../../services/authService'
import { i18n } from '../../translate/i18n'

const Login = () => {

    const [data, setData] = useState({})
    const [error, setError] = useState()
    const navigate = useNavigate();

    const { AuthLogin } = useContext(AuthContext)

    async function handleClick(e) {
        e.preventDefault();
        try {
            if (data.email && data.password) {
                let loginUser = await authService.login(data)
                if (loginUser.statusCode >= 400) {
                    alert(loginUser.error)
                } else {
                    console.log(loginUser)
                    AuthLogin(loginUser['token'])
                    navigate('/dashboard')
                }
            } else {
                alert('Por favor insira os dados de email e senha. ')
                setError('Por favor insira os dados de email e senha. ')
            }
        } catch (error) {
            console.log(error)
            alert('Algo deu errado verifique se seus dados estão corretos. ')
            setError('Algo deu errado verifique se seus dados estão corretos. ')
        }

    }

    return (
        <Box maxH={'500px'}>
            <Flex
                flexDir={['column', 'column', 'row']}
                w={'100%'}
                h={['100%', '100%', '80%']}>
                <Square w={['100%', '100%', '50%']}>
                    <Image src={ScreenLogin} alt="Imagem de fundo" w={'100%'} />
                </Square>
                <Square w={['100%', '100%', '50%']} bg={'container'}>
                    <Flex
                        h={['100%', '100%', '65%']}
                        flexDir={'column'}
                        justify={'flex-start'}
                        align={['center', 'center', 'flex-start']}>
                        <Box>
                            <Flex
                                marginBottom={'55px'}
                                direction={'column'}
                                align={'center'}>
                                <Text color={'text'} fontSize={['28px', '28px', '36px']}>
                                    {i18n.t('titles.login')}
                                </Text>
                                <Text color={'softGray'} fontSize={['18px', '18px', '24px']}>
                                    {i18n.t('subtitles.loginPar1')}
                                </Text>
                                <Text color={'softGray'} fontSize={['18px', '18px', '24px']}>
                                    {i18n.t('subtitles.loginPar2')}
                                </Text>
                            </Flex>
                        </Box>
                        <Box w={'100%'}>
                            <Text align={['center', 'center', 'start']} fontSize={['14px', '14px', '16px']} fontWeight={'bold'}>
                                {i18n.t('inputs.email')}
                            </Text>
                            <Input
                                type={'text'}
                                placeholder={'Exemplo@email.com'}
                                h={['44px', '44px', '56px']}
                                onChange={(e) => {
                                    setData({ ...data, email: e.target.value })
                                }} />
                            <Flex
                                marginTop={['10px', '10px', '16px']}
                                justifyContent={['center', 'center', 'space-between']}>
                                <Text align={['center', 'center', 'start']} fontSize={['14px', '14px', '16px']} fontWeight={'bold'}>
                                    {i18n.t('inputs.password')}
                                </Text>
                                <Text
                                    align={['center', 'center', 'start']}
                                    fontSize={['14px', '14px', '16px']}
                                    fontWeight={'bold'}
                                    color={'yellowButton'}
                                    cursor={'pointer'}>
                                    {i18n.t('navigationPageLink.forgot_password')}
                                </Text>
                            </Flex>
                            <Input
                                type={'password'}
                                placeholder={'Enter password'}
                                h={['44px', '44px', '56px']}
                                onChange={(e) => {
                                    setData({ ...data, password: e.target.value })
                                }} />
                            <Button
                                w={'100%'}
                                mt={['25px', '25px', '35px']}
                                bg={'yellowButton'}
                                h={['44px', '44px', '56px']}
                                onClick={handleClick}>
                                {i18n.t('buttons.login')}
                            </Button>
                        </Box>
                    </Flex>

                </Square >
            </Flex >
        </Box>)
}

export default Login;