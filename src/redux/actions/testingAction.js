import axios from "axios"

export const testingAction = () => async dispatch => {
    try{
        dispatch({
            type : "REQUEST"
        })
        const res = await axios.get("http://localhost:3000/posts")
        console.log(res)
        dispatch({
            type : "SUCCESS",
            payload : res.data
        })
    }catch(err){
        dispatch({
            type : "FAILED"
        })
    }
}

export const testingPostAction = (data) => async dispatch => {
    try{
        dispatch({
            type : "POST_REQUEST"
        })
        const res = await axios.post("http://localhost:3000/posts",data)
        console.log(res)
        dispatch({
            type : "POST_SUCCESS",
            payload : res.data
        })
    }catch(err){
        dispatch({
            type : "POST_FAILED"
        })
    }
}