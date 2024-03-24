import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};
  const deletePost = () => {};

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
        title: "Going to Delhi", 
        body: "Hi i am going to delhi for my nephews wedding. Really excited to attend the wedding fucntion!!!", 
        reactions: 2,
        userId: "user-16",
        tags: ["vacations", "Delhi", "Enjoying"]
 },
        {
        id: '3',
        title: "Going to Delhi", 
        body: "Hi i am going to delhi for my nephews wedding. Really excited to attend the wedding fucntion!!!", 
        reactions: 2,
        userId: "user-13",
        tags: ["vacations", "Delhi", "Enjoying"]
 }
];

export default PostListProvider;
