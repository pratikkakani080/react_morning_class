import React, { useContext, useState } from 'react'
import User from '../user'
import Table from '../table'
import ButtonContext from '../../myContext';
import ModalExample from '../modal';

export default function Home(props) {
    const data = useContext(ButtonContext)
    const [data2, setData2] = useState('')
    // console.log('home**', props.label);
    return (
        <>
            {/* <ModalExample /> */}
            <h1>Home page {data.cartItem}</h1>
            <input
                type='text'
                value={data2}
                onChange={(e) => { console.log('home_changing***'); setData2(e.target.value) }}
            />
            {/* <User label={props.label} /> */}
            <Table label={props.label} />
        </>
    )
}
