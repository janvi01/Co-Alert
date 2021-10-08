import React, { useEffect, useState } from 'react'
import { Heading, Select, VStack, Input, Button } from '@chakra-ui/react'
import Result from './Result';

function Search() {
    const [states, setstates] = useState([]);
    const [stateid, setstateid] = useState(0);
    const [district, setdistrict] = useState([]);
    const [districtid, setdistrictid] = useState(0);
    const [stringdate, setstringdate] = useState("")
    const getStates = async () => {
        fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states", {
            headers: {
                Accept: "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setstates(data.states))
    }
    useEffect(() => {
        getStates();
    }, [])

    useEffect(() => {
        fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`, {
            headers: {
                Accept: "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setdistrict(data.districts))
    }, [stateid])

    function handleChangeState(e) {
        setstateid(e.target.value);
    }
    function handleChangeDistrict(e) {
        setdistrictid(e.target.value);
    }
    function dateform(e) {
        setstringdate((e.target.value))
    }
    return (
        <div className="Search" id={'search'}>
            <VStack justify="center" p={8} pt={16} textAlign="center" spacing="4">
                <Heading mb={4}>Search for Vaccine Availaibility</Heading>
                <Select placeholder="Select State" value={stateid} onChange={handleChangeState} variant="filled" w={["90%", "70%", "50%"]}>
                    {states.map((items, key) => {
                        return <option key={key} value={items.state_id}>{items.state_name}</option>
                    })}
                </Select>
                <Select placeholder="Select District" value={districtid} onChange={handleChangeDistrict} variant="filled" w={["90%", "70%", "50%"]}>
                    {district.map((items, key) => {
                        return <option key={key} value={items.district_id} >{items.district_name}</option>
                    })}
                </Select>
                <Input type="text" placeholder="DD-MM-YYYY" onChange={dateform} variant="filled" w={["90%", "70%", "50%"]} value={stringdate} />
                <Button colorScheme="purple" variant="outline" onClick={() => {
                    setstateid(0); setdistrictid(0);
                    setstringdate("");
                }}>Reset</Button>
            </VStack>
            {districtid !== 0 && stringdate.length > 6 ? <Result districtid={districtid} date={stringdate} /> : ""}
        </ div>
    )
}

export default Search