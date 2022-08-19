import {useState} from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import UserList from '../components/UserList';
import { AppContext } from '../context';
import { Iresponse } from '../types';
import { Outlet } from 'react-router-dom';

const Home = () => {
  
    const [users, updateUsers] = useState<Iresponse>([])
    const [tasks, setTasks] = useState<Iresponse>([])
    const [userLoading, setUserLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)
    const [userError, setUserError] = useState<boolean>(false)
    
    return (
        <AppContext.Provider value={{users, updateUsers, tasks, setTasks, userLoading, setUserLoading, isError, setIsError, userError, setUserError}}>
        <Navbar/>
        <Flex direction='row' width='100%' height='100%'>
            <UserList/>
            <Outlet/>
        </Flex>
        </AppContext.Provider>
    )
}

export default Home;