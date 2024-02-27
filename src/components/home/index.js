import React, { useContext, useState } from 'react'
import User from '../user'
import Table from '../table'
import ButtonContext from '../../myContext';
import ModalExample from '../modal';
import { useDispatch, useSelector } from 'react-redux';
import { handleText } from '../../redux/reducers/common';
import { decremented, incremented } from '../../redux/reducers/auth';

export default function Home(props) {
    const data = useContext(ButtonContext)
    const counterData = useSelector((store) => store.counter)
    const authData = useSelector((store) => store.auth)
    const dispatch = useDispatch()
    // const [data2, setData2] = useState('')
    // console.log('home**', props.label);
    // console.log('store***', authData);
    return (
        <>
            {/* <ModalExample /> */}
            <h1>Home page {data.cartItem}</h1>
            <input
                type='text'
                value={counterData.text}
                onChange={(e) => {
                    dispatch(handleText(e.target.value))
                    // setData2(e.target.value)
                }}
            />
            <button onClick={() => dispatch(incremented(5))}>Increment</button>
            <button onClick={() => dispatch(decremented())}>Decrement</button>
            <User label={props.label} />
            {/* <Table label={props.label} /> */}
        </>
    )
}
