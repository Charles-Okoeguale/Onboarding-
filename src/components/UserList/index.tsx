import { Flex, Text} from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { useContext, useEffect} from "react";
import User from "../User";
import { AppContext } from "../../context";
import Loading from "../Loading";
import { Iuser } from "../../types";


const UserList = () => {
    const {users, updateUsers, userLoading, setUserLoading} = useContext(AppContext)

    const getUsers = (() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response : AxiosResponse) => {
            setUserLoading(false)
            updateUsers(response.data)
        })
    })()

    return (
        <Flex w='40%' direction='column' p={8}>
            <Text alignSelf='center' fontWeight='700' mb={4} fontSize={28}>Users</Text>
            {userLoading && <Loading/>}
            {users.map((user: Iuser, index: number) => <User key={user.id} user={user} index={index}/>)}
        </Flex>
    )
}

export default UserList;