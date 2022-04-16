const initialState = {
    userData : null,
    loading : false,
    error : false
}
const testingReducer = (state = initialState,action) => {
   switch(action.type){
    case "REQUEST" : 
    return{
        ...state,
        loading : true
    }
    case "SUCCESS" : 
    return{
        ...state,
        userData : action.payload,
        loading : false
    }
    case "FAILED" : 
    return{
        ...state,
        loading : false,
        error : true
    }
    case "POST_SUCCESS" : 
    return {
        ...state,
        userData : [
            action.payload,
            ...state.userData
        ]
    }
    default : return state
   }
}

export default testingReducer