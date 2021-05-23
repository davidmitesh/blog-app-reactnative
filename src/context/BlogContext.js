import { ADD_BLOG_POST, DELETE_BLOG_POST } from './contextTypes'
import createDataContext from './createDataContext'

const blogReducer=(state,action)=>{
    //defining our reducer
    switch(action.type){
        case DELETE_BLOG_POST:
            return state.filter((blogpost)=>blogpost.id!==action.payload)//very nice simple filter 
            //function....MUST USE FUNCTION-------------------------------------------------------
            //------------------------------------------------------------------------------------
        case ADD_BLOG_POST:
            return [...state,
                {
                    id:Math.floor(Math.random()*99999),
                    title:`Blog post ${state.length+1}`
                }
            ]
        default:
            return state
    }
}

const addBlogPost=(dispatch)=>{
    return ()=>{
        dispatch({type:ADD_BLOG_POST}) 
    }
}

const deleteBlogPost=(dispatch)=>{
    return (id)=>{
        dispatch({type:DELETE_BLOG_POST,payload:id})
    }
}

export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost},[])
