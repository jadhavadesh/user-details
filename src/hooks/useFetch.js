import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [response, setResponse] = useState({
        responseObj: {},
        // errorObj: {},
        // isLoading: false,
        // error: false,
        // success: false,
    });
    useEffect(() => {

        axios.get(url)
            .then((res) => {
                setResponse({
                    ...response,
                    responseObj: res.data,
                    // success: true,
                })
            })
            .catch((error) => {
                // setResponse({
                //     ...response,
                //     errorObj: error,
                //     error: true,
                // })
            })
            .finally(() => {
                // setResponse({
                //     ...response,
                //     isLoading: false
                // })
            })

    }, [])

    return response;
}

