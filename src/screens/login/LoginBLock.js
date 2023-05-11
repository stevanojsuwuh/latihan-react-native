import GLOBALS from '../../Global'
import { useState } from 'react'
import {API_URL} from '@env'

export const LoginBlock = () => {

    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onAuthenticate = async (userName, password, onNavigate) => {
        try {
            const response = await fetch(
                `${API_URL}`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: userName,
                        password: password
                    })
                }
            )
            const json = await response.json()
            console.log(json)
            onNavigate(GLOBALS.SCREEN.MATERIAL)
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleUserNameChange = (userNameValue) => {
        setUsername(userNameValue)
    }

    const handlePasswordChange = (passwordValue) => {
        setPassword(passwordValue)
    }

    return {
        userName,
        password,
        handlePasswordChange,
        handleUserNameChange,
        onAuthenticate
    }
    
}