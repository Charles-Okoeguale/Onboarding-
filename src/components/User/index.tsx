import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect} from "react";
import {AppContext} from '../../context'
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { Iuser, IUserProp } from "../../types";


const User = ({user, index} : IUserProp) => {
    const {setTasks, setIsError, users} = useContext(AppContext)

    const arr : string[] = []
    const navigation = useNavigate()
    const params = useParams()
    const userId = params.userId
    const idz = users.map((user : Iuser) =>  arr.push(user.id.toString())) 


    const handleRouteParam = () => {
        if (!userId) {
            navigation('/users/1')
            axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => {
                setTasks(response.data)
            })
            .catch((err) => console.log(err))
        } 
        
        if (parseInt(userId as string) > arr.length) {
            navigation('/404')
        }
    }

    const handleClick = (e : React.MouseEvent<Element, MouseEvent>) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
        .then((response) => {
            setTasks(response.data)
        })
        .catch((err) => {
            setIsError(true)
        })
    }

    useEffect(() => {
        handleRouteParam() 
    }, [])


    return (
        <Link to={`${user.id}`}>
        <Box 
            key={index}
            textAlign='center'
            w='100%'
            h='50px' 
            background='white' 
            borderRadius={16} 
            _hover={{backgroundColor : 'lightgreen', color: 'white'}}
            mb={4} 
            padding={4}
            onClick={(e) => handleClick(e)}
        >
                {user.name}
        </Box> 
        </Link>
    )
}

export default User;