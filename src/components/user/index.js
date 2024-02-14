import React, { memo, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button'

function User(props) {
    // console.log('user**', props.label);
    const [todoData, setTodoData] = useState(JSON.parse(localStorage.getItem('multiUser')) || [])
    const [isDeleted, setIsDeleted] = useState(false)

    console.log('user_rendering********');
    useEffect(() => {
        setTodoData(JSON.parse(localStorage.getItem('multiUser')))
        setIsDeleted(false)
    }, [isDeleted])

    const navigate = useNavigate()

    // const handleEdit = (id) => {
    //     navigate(`/form/${id}`)
    // }

    const handleDelete = (index) => {
        // delete todoData[index]
        const filteredData = todoData.filter((el, i) => index !== i)
        localStorage.setItem('multiUser', JSON.stringify(filteredData))
        setIsDeleted(true)

    }

    return (
        <>
            <table>
                <tr>
                    <th>email</th>
                    <th>password</th>
                </tr>
                {
                    todoData?.map((element, index) => {
                        return (

                            <tr>
                                <td>
                                    {element.email}
                                </td>
                                <td>
                                    {element.password}
                                </td>
                                <td>
                                    <Link to={`/form/${index}`} >
                                        <button>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <Button label={props.label} />
        </>
    )
}

export default memo(User)