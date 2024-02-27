import React, { useEffect, useRef, useState } from 'react'
import Children from './component/children'
import { useDispatch, useSelector } from 'react-redux'
import { handleUpdateUser } from '../../redux/reducers/common'

export default function UseRef() {
    const user = useSelector((state) => state.counter.user)
    const dispatch = useDispatch()
    console.log('user**', user);
    const ref = useRef('')
    const [value, setValue] = useState('')

    const handleOnClick = () => {
        // console.log('ref***', ref.current.value);
        // ref.current.value = 'hello world'
        // ref.current = ref.current + 1
    }

    // useEffect(() => {
    //     ref.current = value
    // }, [value])


    const handleChange = (data) => {
        dispatch(handleUpdateUser({ ...user, name: data }))
        setValue(data)
    }

    return (
        <div>
            <input type='text' value={value} onChange={(e) => handleChange(e.target.value)} /><br />
            <button onClick={handleOnClick}>Click me</button><br />
            {/* ref value: {ref.current}<br /> */}
            <Children ref={ref} />
            new value: {value}
        </div>
    )
}
