import React, { memo, useEffect, useState } from 'react'
import Form from '../form';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts, getData } from '../../redux/reducers/common';
import { getTodoData } from '../../redux/reducers/auth';

export default function Table({ label }) {
    const todoDetails = useSelector(state => state.auth.data || [])
    const loading = useSelector(state => state.auth.loading)
    const [todoData, setTodoData] = useState([])
    const dispatch = useDispatch()
    console.log('table_rendering********');

    useEffect(() => {
        dispatch(getTodoData())
        // getTodoData()
        dispatch(addPosts())
    }, [label])

    useEffect(() => {
        setTodoData(todoDetails || [])
    }, [todoDetails])

    // const getTodoData = async () => {
    //     let res = await fetch('https://jsonplaceholder.typicode.com/todos')
    //     let data = await res.json()
    //     setTodoData(data)
    // }

    console.log('todoData**', todoData);
    return (
        <>
            {
                loading ? 'Loading..................................................................' : (
                    <>
                        <table>
                            <tr>
                                <th>id</th>
                                <th>{label}</th>
                            </tr>
                            {
                                todoData?.map(element => {
                                    return (

                                        <tr>
                                            <td>
                                                {element.id}
                                            </td>
                                            <td>
                                                {element.title}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        <Form />
                    </>

                )
            }
        </>
    )
}
