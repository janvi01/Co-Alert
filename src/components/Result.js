import { VStack, Text, Stack, Spinner, Badge } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function Result({ districtid, date }) {
    const [items, setitems] = useState([])
    useEffect(() => {
        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtid}&date=${date}`, {
            headers: {
                Accept: "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setitems(data.sessions))
    }, [districtid, date])

    return (
        <>
            {items.length > 0 ? (<Stack direction={["column", "row"]} w="100%" height="max-content" p={8} wrap="wrap" justify="center" spacing="3">
                {items.map((item, key) => {
                    return (
                        <VStack className="card" p={[0,4,8]} key={key} style={{ margin: "12px" }} shadow="dark-lg" bgColor="blackAlpha.500">
                            <Text fontWeight="bold">Name : {item.name}</Text>
                            <Text>District name : {item.district_name}</Text>
                            <Text>State : {item.state_name}</Text>
                            <Text fontWeight="bold">Vaccine : {item.vaccine}</Text>
                            <Text fontWeight="bold">Availaibility : {item.available_capacity}</Text>
                            <Text>Dose 1 Availaibility : {item.available_capacity_dose1}</Text>
                            <Text>Dose 2 Availaibility : {item.available_capacity_dose2}</Text>
                            {item.available_capacity > 0 ?
                                <Badge colorScheme="teal">Availaible</Badge> : <Badge colorScheme="red">Not Availaible</Badge>}
                        </VStack>)
                })}
            </Stack>) : (<VStack justify="center" p={8}>
                <Spinner />
                <Text>Loading....</Text></VStack>)
            }
        </>
    )
}

export default Result
