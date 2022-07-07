import { ReactNode } from 'react';
import Link from 'next/link';
import {
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link as ChakraLink,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Avatar,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Box, 
    Flex
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Cadastrar Produtos', 'Listar Produtos'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <ChakraLink
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </ChakraLink>
  );
  
  export default function SimpleCard() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
                <Box>Logo</Box>
                <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                    <Link href="/produto" passHref>
                        <NavLink>Cadastrar Produtos</NavLink>
                    </Link>
                </HStack>
            </HStack>
            </Flex>

            {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                    <Link href="/produto" passHref>
                        <NavLink key={"cadastrar_produto"}>Cadastrar Produtos</NavLink>
                    </Link>
                </Stack>
            </Box>
            ) : null}
        </Box>

        <Box p={4}>
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Cadastro de Produto</Heading>
            </Stack>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                <FormControl id="nome_cliente">
                    <FormLabel>Nome do Cliente:</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="cod_barras">
                    <FormLabel>Código de Barras:</FormLabel>
                    <Input type="text" />
                </FormControl>
                <Stack spacing={10}>
                    <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    
                    </Stack>
                    <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                        bg: 'blue.500',
                    }}>
                    Salvar
                    </Button>
                </Stack>
                </Stack>
            </Box>
            </Stack>
        </Flex>
        </Box>
        </>
    );
  }