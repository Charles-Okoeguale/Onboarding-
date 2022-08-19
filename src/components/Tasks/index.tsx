import { Flex, Text, Checkbox} from "@chakra-ui/react";
import { useContext, useEffect} from "react";
import { AppContext } from "../../context";
import axios from "axios";
import Error from "../Error";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { Iuser } from "../../types";


const Tasks = () => {
    const {tasks, isError, setUserLoading, userLoading, setTasks} : any = useContext(AppContext)

    const params = useParams()
    const userId = params.userId

    const getTask = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then((response) => {
            setUserLoading(false)
            console.log(userId)
            setTasks(response.data)
        })
    }


    useEffect(() => {
        setTimeout(() => {
            getTask()
        }, 1000)
    }, [])
    

    return (
        <Flex w='60%' direction='column' p={8}>
            <Text alignSelf='center' fontWeight='700' mb={4} fontSize={28}>Tasks List</Text>
                {userLoading && <Loading/>}
                {isError && <Error/>}
                {tasks.map((task : Iuser, i : number) => { 
                     if (task.completed === true) return <Checkbox key={i} iconColor='black' isChecked>{task.title}</Checkbox>      
                     if (task.completed === false) return <Checkbox key={i} iconColor='black'>{task.title}</Checkbox> 
                })}
        </Flex>
    )
}

export default Tasks;

