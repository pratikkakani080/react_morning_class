import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../../redux/reducers/common'

export default function ApiCall() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())

    }, [])


    return (
        <div>
            Hello
        </div>
    )
}
