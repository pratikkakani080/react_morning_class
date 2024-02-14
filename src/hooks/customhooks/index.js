import React, { useState } from 'react'

export default function useLocalStorageHook() {
    const [state, setState] = useState('test')
    const handleChange = (data) => {
        setState(data)
    }
    const setLocal = (key, data) => {
        localStorage.setItem(key, data)
    }
    const setObjectData = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data))
    }
    const getObjectData = (key) => {
        return JSON.parse(localStorage.getItem(key))
    }

  return [state, handleChange, setLocal, setObjectData, getObjectData]
}
