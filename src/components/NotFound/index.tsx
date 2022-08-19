import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from "react-router-dom";

const  NotFound = () => {
  const navigation = useNavigate()

  const handleClick = () => {
    navigation('/users/1')
  }
  return (
    <Box textAlign='center' fontSize={40}>
      Page Not Found !
      <Text fontSize={32} color='blue' onClick={handleClick}>Go to index page</Text>
    </Box>
  )
}

export default NotFound;