import GLOBALS from '../../Global'
import { useState } from 'react'
import {API_URL} from '@env'
import { Alert } from 'react-native'

export const LoginBlock = () => {

    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setShowLoading] = useState(false);

    const onAuthenticate = async (userName, password, navigation) => {
        try {
            handleShowLoadingChange(true)
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
            handleShowLoadingChange(false);
            if (json.token) {
                navigation.replace(GLOBALS.SCREEN.MATERIAL)
            }
            
        }
        catch (error) {
            handleShowLoadingChange(false);
            console.error(error)
            if (error.message === 'Username or password is incorrect') {
                Alert.alert('Error', 'Username or password is incorrect');
            }
        }
    }

    const handleShowLoadingChange = (isLoadingValue) => {
        setShowLoading(isLoadingValue);
    };

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
        onAuthenticate,
        isLoading
    }
    
}