import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { testingAction, testingPostAction } from '../redux/actions/testingAction'

const Testing = () => {
    const [handleInput, sethandleInput] = useState({
        title: "",
        body: ""
    })
    const { userData } = useSelector(state => state.testingReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(testingAction())
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        sethandleInput((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newObj = {
            userId: 11,
            id: userData.length + 1,
            title: handleInput.title,
            body: handleInput.body
        }
        dispatch(testingPostAction(newObj))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" name="title" value={handleInput.title} onChange={handleChange} />
                <textarea type="text" name="body" value={handleInput.body} onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
        </>
    )
}

export default Testing;