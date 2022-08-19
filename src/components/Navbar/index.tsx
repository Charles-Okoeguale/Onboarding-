import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
    return (
        <Flex justifyContent='center' alignItems='center'>
            <Text fontSize={36} fontWeight='900'>Onboarding Tracker</Text>
        </Flex>
    )
}

export default Navbar;