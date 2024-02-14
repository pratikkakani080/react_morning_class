import React, { memo, useEffect, useState } from 'react'
import Form from '../form';

export default function Table({ label }) {
    const [todoData, setTodoData] = useState([])
    console.log('table_rendering********');

    useEffect(() => {
        getTodoData()
    }, [label])

    const getTodoData = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data = await res.json()
        setTodoData(data)
    }

    return (
        <>
            <table>
                <tr>
                    <th>id</th>
                    <th>{label}</th>
                </tr>
                {
                    todoData.map(element => {
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
