import { createContext, useReducer } from "react";
import { DefaultContext } from "react-icons";

const DEFAULT_CONTEXT = {
    
        postList: [],
        addPost: () => {},
        deletePost: () => {}
    
    
}

const PostList = createContext(DEFAULT_CONTEXT);

 const postListReducer = (currPostList, action) => {
  return currPostList;
 }

const PostListProvider = (children) => {
  const[postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_CONTEXT) 
  
  const addPost = () =>{
    
  }
  const deletePost = () =>{

  }

   return <PostList.Provider value={
    {postList, addPost, deletePost}
   }>{children}</PostList.Provider>;
};

export default PostListProvider;