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
        <Box maxHeight={'500px'}>
            <Flex
                w={'100%'}
                h={'80%'}
                bg={'red'}>
                <Square w={`50%`} bg={'red'}>
                    <Image src={ScreenLogin} alt="Imagem de fundo" w={'100%'} />
                </Square>
                <Square w={`50%`} bg={'container'}>
                    <Flex
                        h={'65%'}
                        direction={'column'}
                        align={'center'}
                        justifyContent={'flex-start'}>
                        <Box>
                            <Flex
                                marginBottom={'55px'}
                                direction={'column'}
                                align={'center'}>
                                <Text color={'text'} fontSize={'36px'}>
                                    {i18n.t('titles.login')}
                                </Text>
                                <Text color={'softGray'} fontSize={'24px'}>
                                    {i18n.t('subtitles.loginPar1')}
                                </Text>
                                <Text color={'softGray'} fontSize={'24px'}>
                                    {i18n.t('subtitles.loginPar2')}
                                </Text>
                            </Flex>
                        </Box>
                        <Box w={'100%'}>
                            <Text align={'start'} fontSize={'14px'} fontWeight={'bold'}>E-mail </Text>

                            <Input type={'text'} placeholder={'Exemplo@email.com'} h={'56px'} onChange={(e) => {
                                setData({ ...data, email: e.target.value })
                            }} />
                            <Flex
                                marginTop={'10px'}
                                justifyContent={'space-between'}>
                                <Text align={'start'} fontSize={'14px'} fontWeight={'bold'}>{i18n.t('inputs.password')} </Text>
                                <Text
                                    align={'start'}
                                    fontSize={'14px'}
                                    fontWeight={'bold'}
                                    color={'yellowButton'}
                                    cursor={'pointer'}>
                                    {i18n.t('navigationPageLink.forgot_password')}
                                </Text>
                            </Flex>
                            <Input type={'password'} placeholder={'Enter password'} h={'56px'} onChange={(e) => {
                                setData({ ...data, password: e.target.value })
                            }} />
                            <Button w={'100%'} mt={'35px'} bg={'yellowButton'} h={'56px'} onClick={handleClick}>
                                {i18n.t('buttons.login')}
                            </Button>
                        </Box>
                    </Flex>

                </Square >
            </Flex >
        </Box>)
}

export default Login;