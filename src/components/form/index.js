import React, { useContext, useEffect, useState } from 'react'
import Button from '../button'
import { useNavigate, useParams } from 'react-router-dom'
import User from '../user'
import ButtonContext from '../../myContext'

// hooks

export default function Form(props) {
  const navigate = useNavigate()
  const data = useContext(ButtonContext)
  const [user, setUser] = useState({})
  const [submitLabel, setSubmitLabel] = useState('Submit')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const params = useParams()
  // console.log('params*******', params);

  useEffect(() => {
    // const id = window.location.pathname.split('/').pop()
    // console.log('id***', id);
    if (params.id) {
      const todoData = JSON.parse(localStorage.getItem('multiUser')) || []
      const editableData = todoData.find((_, index) => index == params.id)
      setUser(editableData || {})
    }
    return () => { // clean up function || unmounting
      // localStorage.clear()
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    const data = {
      ...user,
      [name]: value,
    }
    setUser(data)
    setErrors({ ...errors, [name]: '' })
  }

  const validate = () => {
    // let formIsValid = true
    // !user.email || user.email.trim() === '' || !user.password || user.password.trim() === ''
    let error = {}

    if (!user.email || user.email.trim() === '') {
      // formIsValid = false
      error.email = '* please provide email'
    }
    if (!user.password || user.password.trim() === '') {
      // formIsValid = false
      error.password = '* please provide password'
    }
    if (!user.mobile) {
      // formIsValid = false
      error.mobile = '* please provide mobile'
    }
    // console.log('error******', error);
    setErrors({ ...errors, ...error })
    // console.log('error_obj to array******', Object.keys(error));


    if (Object.keys(error).length <= 0) {
      handleSubmit()
    }

    // return formIsValid
  }

  const handleSubmit = () => {
    // console.log('condition**', user.email && user.password && user.mobile);
    // if (user.email && user.password && user.mobile) {
    const multiData2 = JSON.parse(localStorage.getItem('multiUser')) || []
    if (params.id) { // edit functionality
      let multiData3 = multiData2.map((el, index) => {
        if (index == params.id) {
          return user
        } else {
          return el
        }
      })
      localStorage.setItem('multiUser', JSON.stringify([...multiData3]))
    } else {
    localStorage.setItem('multiUser', JSON.stringify([...multiData2, user]))
    }
    navigate('/user')
    // setIsSubmitted(true)
    // } else {
    //   console.log('test****');
    // }
  }

  return (
    <div>
      { // conditional rendering
        isSubmitted ? (
          <User />
        ) : (
          <>
            email* (Required): <input type='text' value={user.email} name='email' onChange={(e) => handleChange(e)} required /> <br />
            <span style={{ color: 'red' }}>{errors.email}</span> <br />
            password: <input type='password' value={user.password} name='password' onChange={(e) => handleChange(e)} /> <br />
            <span style={{ color: 'red' }}>{errors.password}</span> <br />
            Mobile: <input type='number' value={user.mobile} name='mobile' onChange={handleChange} /> <br />
            <span style={{ color: 'red' }}>{errors.mobile}</span> <br />
            <button onClick={() => handleSubmit()}>{submitLabel}</button>
            <button onClick={() => data.setLabel('Label updated')}>Change the label</button>
            {/* <Button handleOnClick={(value) => setSubmitLabel(value)} submitLabel={submitLabel} /> */}
            <br />
            email: {user.email} <br />
            password: {user.password}
          </>
        )
      }



    </div>
  )
}

