import { Box, Flex, Text } from "@chakra-ui/react";
import {MdCancel} from 'react-icons/md'
import React from "react";

const Error = () => {
    return (
        <Flex direction='column' justifySelf='center' justifyContent='center' alignItems='center'  w='50%' h='50%' borderRadius={16} border='1px solid white'>
            <Text fontSize={28}>Error Fetching your data</Text>
            <Box m={8}><MdCancel fontSize={80} color='red'/></Box>
        </Flex>
    )
}

export default Error;