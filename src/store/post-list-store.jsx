import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST"){
    newPostList = currPostList.filter(post => post.id !== action.payload.postId);
  } else if(action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: postTitle, 
        body: postBody, 
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId

      },
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
        {
        id: '1',
        title: "Going to Delhi", 
        body: "Hi i am going to delhi for my nephews wedding. Really excited to attend the wedding fucntion!!!", 
        reactions: 2,
        userId: "user-9",
        tags: ["vacations", "Delhi", "Enjoying"]
 }, 
        {
        id: '2',
        title: "Going to Bar", 
        body: "Hi today i gone to bar and i had fun today ngiht!!!", 
        reactions: 69,
        userId: "user-7",
        tags: ["Mumbai", "Clubbing", "Fun", "nightLife"]
 }, 
        
];

export default PostListProvider;
