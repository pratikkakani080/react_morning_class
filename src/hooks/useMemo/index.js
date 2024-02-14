import React, { useCallback, useMemo, useState } from 'react'

export default function UseMemoHook() {
    const [count, setCount] = React.useState(0)
    const [test, setTest] = useState(0)

    const data = useMemo(() => {
        return count + 1
    }, [count])

    const handleChange = () => {
        setTest(count)
    }

    const func = useCallback(() => {
        handleChange()
    }, [count])

    const handleOnClick = () => {
        setCount(prevValue => {
            prevValue += 1
            console.log('prev*****', prevValue, count)
            return prevValue
        })
        func()
    }
    console.log('data***', data, 'count***', count, 'test***', test);
    return (
        <div>
            <button onClick={handleOnClick}>Click {count} times</button>
        </div>
    )
}
