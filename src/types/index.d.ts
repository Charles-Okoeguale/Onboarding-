export interface Iresponse {
    [index: number] : {
        [key: string] : string | object | number
    }
}

export interface Iuser {
    [key: string] : any
}

export interface IUserProp {
    user : Iuser
    index : number
}

export interface IContextType {
    users : Iresponse
    updateUsers : React.Dispatch<React.SetStateAction<Iresponse>>
    tasks : Iresponse
    setTasks : React.Dispatch<React.SetStateAction<Iresponse>>
    userLoading : boolean
    setUserLoading :  React.Dispatch<React.SetStateAction<boolean>>
    isError : boolean
    setIsError : React.Dispatch<React.SetStateAction<boolean>>
    userError : boolean
    setUserError : React.Dispatch<React.SetStateAction<boolean>>
}

