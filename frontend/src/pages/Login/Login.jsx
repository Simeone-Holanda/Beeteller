import { Box, Button, Flex, Input, Square, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScreenLogin from '../../assets/ScreenLogin.png'
import { AuthContext } from '../../contexts/AuthContext'
import authService from '../../services/authService'

const Login = () => {

    const [data, setData] = useState({})
    const [error, setError] = useState()
    const navigate = useNavigate();

    const { auth, setAuth } = useContext(AuthContext)

    async function handleClick(e) {
        e.preventDefault();
        try {
            if (data.email && data.password) {
                let loginUser = await authService.login(data)
                if (loginUser.statusCode >= 400) {
                    alert(loginUser.error)
                } else {
                    setAuth(true)
                    navigate('/dashboard')
                }
            } else {
                alert('Por favor insira os dados de email e senha. ')
                setError('Por favor insira os dados de email e senha. ')
            }
        } catch (error) {
            alert('Algo deu errado verifique se seus dados estão corretos. ')
            setError('Algo deu errado verifique se seus dados estão corretos. ')
        }

    }

    return (
        <Flex
            w={'100%'}
            h={'80%'}
            bg={'red'}>
            <Square w={`50%`} bg={'red'}>
                <img src={ScreenLogin} alt="Imagem de fundo" />
            </Square>
            <Square w={`50%`} bg={'container'}>
                <Flex
                    direction={'column'}
                    align={'center'}>
                    <Text color={'text'} fontSize={'36px'}>
                        Olá! Bem vindo de volta
                    </Text>
                    <Text color={'softGray'} fontSize={'24px'}>
                        Faça login com seus dados inseridos
                    </Text>
                    <Text color={'softGray'} fontSize={'24px'}>
                        durante o seu registro.
                    </Text>
                    <Box w={'100%'}>
                        <Text align={'start'} fontSize={'14px'} fontWeight={'bold'}>E-mail </Text>
                        <Input type={'text'} placeholder={'Exemplo@email.com'} onChange={(e) => {
                            setData({ ...data, email: e.target.value })
                        }} />
                        <Flex
                            justifyContent={'space-between'}>
                            <Text align={'start'} fontSize={'14px'} fontWeight={'bold'}>Senha </Text>
                            <Text
                                align={'start'}
                                fontSize={'14px'}
                                fontWeight={'bold'}
                                color={'yellowButton'}>
                                Esqueceu a senha
                            </Text>
                        </Flex>
                        <Input type={'password'} placeholder={'Enter password'} onChange={(e) => {
                            setData({ ...data, password: e.target.value })
                        }} />
                        <Button w={'100%'} mt={'15px'} onClick={handleClick}> Login</Button>
                    </Box>
                </Flex>

            </Square >
        </Flex >);
}

export default Login;