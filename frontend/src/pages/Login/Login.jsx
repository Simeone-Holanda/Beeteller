import { Box, Button, Flex, Input, Square, Text } from "@chakra-ui/react";
import { useState } from "react";
import ScreenLogin from '../../assets/ScreenLogin.png'
const Login = () => {

    const [data, setData] = useState({})
    const [error, setError] = useState()

    function handleClick() {
        if (data.email && data.password) {
            console.log('Enviado')
            console.log(data)
        } else {
            alert('Por favor insira os dados de email e senha. ')
            setError('Por favor insira os dados de email e senha. ')
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
                        <Button w={'100%'} mt={'15px'} onClick={() => {
                            handleClick()
                        }}> Login</Button>
                    </Box>
                </Flex>

            </Square >
        </Flex >);
}

export default Login;