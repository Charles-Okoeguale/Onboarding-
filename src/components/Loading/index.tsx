import React from "react";
import { Spinner, Flex } from '@chakra-ui/react'


const Loading = () => {
    return (
        <Flex justifyContent='center' m={40}>
            <Spinner size='xl'/>
        </Flex>
    )
}

export default Loading;