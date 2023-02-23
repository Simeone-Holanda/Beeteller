import { Box, Button, Flex, Image, Input, Square, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScreenLogin from '../../assets/ScreenLogin.png'
import authService from '../../services/authService'
import { i18n } from '../../translate/i18n'

const Register = () => {

    const [data, setData] = useState({})
    const [error, setError] = useState()
    const navigate = useNavigate();

    async function handleClick(e) {
        e.preventDefault();
        try {
            if (data.username && data.email && data.password && data.password_again) {
                if (data.password !== data.password_again) {
                    triggerError('Os campos de senha devem ser iguais. ')
                } else {
                    let loginUser = await authService.register(data)
                    if (loginUser.statusCode >= 400) {
                        triggerError(loginUser.error)
                    } else {
                        navigate('/')
                    }
                }
            } else {
                // alert('Por favor insira os dados de email e senha. ')
                triggerError('Por favor preencha todos os campos do cadastro. ')
            }
        } catch (error) {
            triggerError('Algo deu errado verifique se seus dados estão corretos. ')
        }

    }

    function triggerError(err) {
        setError(err)
        setTimeout(() => {
            setError('')
        }, 3000)
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
                                    {i18n.t('titles.register')}
                                </Text>
                                <Text color={'softGray'} fontSize={['18px', '18px', '24px']}>
                                    {i18n.t('subtitles.register')}
                                </Text>
                            </Flex>
                        </Box>
                        <Box w={'100%'}>
                            <Text
                                color={'red'}
                                marginTop={['10px', '10px', '16px']}
                                align={['center', 'center', 'center']}
                                fontSize={['14px', '14px', '16px']}
                            >{error ? error : ''}</Text>
                            <Text
                                marginTop={['10px', '10px', '16px']}
                                align={['center', 'center', 'start']}
                                fontSize={['14px', '14px', '16px']}
                                fontWeight={'bold'}>
                                {i18n.t('inputs.name')}
                            </Text>
                            <Input
                                type={'text'}
                                placeholder={'username'}
                                h={['44px', '44px', '56px']}
                                onChange={(e) => {
                                    setData({ ...data, username: e.target.value })
                                }} />
                            <Text
                                marginTop={['10px', '10px', '16px']}
                                align={['center', 'center', 'start']}
                                fontSize={['14px', '14px', '16px']}
                                fontWeight={'bold'}>
                                {i18n.t('inputs.email')}
                            </Text>
                            <Input
                                marginTop={['10px', '10px', '16px']}
                                type={'text'}
                                placeholder={'Exemplo@email.com'}
                                h={['44px', '44px', '56px']}
                                onChange={(e) => {
                                    setData({ ...data, email: e.target.value })
                                }} />

                            <Text
                                marginTop={['10px', '10px', '16px']}
                                align={['center', 'center', 'start']}
                                fontSize={['14px', '14px', '16px']}
                                fontWeight={'bold'}>
                                {i18n.t('inputs.password')}
                            </Text>
                            <Input
                                type={'password'}
                                placeholder={'Enter password'}
                                h={['44px', '44px', '56px']}
                                onChange={(e) => {
                                    setData({ ...data, password: e.target.value })
                                }} />
                            <Text
                                mt={['25px', '25px', '35px']}
                                align={['center', 'center', 'start']}
                                fontSize={['14px', '14px', '16px']}
                                fontWeight={'bold'}>
                                {i18n.t('inputs.password_again')}
                            </Text>
                            <Input
                                type={'password'}
                                placeholder={'Enter password'}
                                h={['44px', '44px', '56px']}
                                onChange={(e) => {
                                    setData({ ...data, password_again: e.target.value })
                                }} />
                            <Text
                                align={'end'}
                                fontSize={'14px'}
                                marginTop={['5px', '5px', '8px']}
                                _hover={{ color: 'yellowButton' }}>
                                <Link to='/'>Já tem uma conta ?</Link>
                            </Text>
                            <Button
                                w={'100%'}
                                mt={['25px', '25px', '35px']}
                                bg={'yellowButton'}
                                h={['44px', '44px', '56px']}
                                onClick={handleClick}>
                                {i18n.t('buttons.register')}
                            </Button>

                        </Box>
                    </Flex>

                </Square >
            </Flex >
        </Box>)
}

export default Register;