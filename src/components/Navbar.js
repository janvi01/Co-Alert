import { Heading, HStack, Icon, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {MdCoronavirus} from 'react-icons/md'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <HStack w="100%" className="nav" p={4} color="white">
            <Icon as={MdCoronavirus} boxSize="8"></Icon>
            <HStack spacing="0">
            <Heading>Co-</Heading>
            <Heading color="red.500">Alert</Heading>
            </HStack>
            <Spacer/>
            <HStack spacing="8" p={2}>
            <Link to="/"><Text fontWeight="bold">Home</Text></Link>
            <Link to=""><Text fontWeight="bold">Contact</Text></Link>
            </HStack>
        </HStack>
    )
}

export default Navbar
