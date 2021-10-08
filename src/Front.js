import React from 'react'
import '../src/App.css'
import { Button, Container, Text, Stack, VStack } from '@chakra-ui/react'
import { ReactComponent as PicSvg } from './pic.svg'

function Front() {
    return (
        <>
            <div className="frontstyle" >
                <VStack p={4} w="100%">
                    <Stack direction={["column", "row"]} pt={[4, 16, 32]} spacing="16">
                        <VStack justify="center" spacing="8">
                            <Container fontSize={["2xl", "5xl"]} fontWeight="bold">"India is set to defeat
                                Covid-19. Every Indian is making it possible."</Container>
                            <Text>- PM Narendra Modi</Text>
                            <Stack direction={["column", "row"]} justify="center">
                                <a href="https://selfregistration.cowin.gov.in/" target="_blank" rel="noreferrer"><Button variant="outline" colorScheme="purple" size="lg">Book your slot</Button></a>
                                <a href="https://selfregistration.cowin.gov.in/" target="_blank" rel="noreferrer"><Button variant="outline" colorScheme="purple" size="lg">Download Certificate</Button></a>
                                <a href="#search"><Button variant="outline" colorScheme="purple" size="lg">Search Vaccination slots</Button></a>
                            </Stack>
                        </VStack>
                        <PicSvg width="100%" height="100%" />
                    </Stack>
                </VStack>
            </div>
        </>
    )
}

export default Front
