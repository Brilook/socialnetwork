import React from "react";
import ReactDom from "react-dom";
import App from "../App";
import profileReducer, {addPostCreator, deletePost} from "./profileReducer";

const state = {
  postData: [{
    id: 1,
    message: 'hi, how are you?',
    likesCount: 24
  },
    {
      id: 2,
      message: 'it\'s my first post!',
      likesCount: 42
    },
    {
      id: 3,
      message: 'Where does it come from\n? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      likesCount: 42
    },
    {
      id: 4,
      message: 'it\'s my first post!Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      likesCount: 42
    },
  ],
};

const postsLength = state.postData.length;

it('length of posts sould be incremented', () => {
  const action = addPostCreator('brilook');
  const newState = profileReducer(state ,action);

  expect(newState.postData.length).toBe(postsLength + 1)
});

it('message of new post should be correct', () => {
  const action = addPostCreator('brilook');
  const newState = profileReducer(state ,action);

  expect(newState.postData[0].message).toBe(action.newPostBody)
});

it('after deleting length of posts sould be decremented', () => {
  const action = deletePost(1);
  const newState = profileReducer(state ,action);

  expect(newState.postData.length).toBe(postsLength - 1)
});

it('after deleting length of posts souldn`t be decremented if id is incorrect', () => {
  const action = deletePost(1000);
  const newState = profileReducer(state ,action);

  expect(newState.postData.length).toBe(postsLength)
});

it('after deleting the specified ID should not be', () => {
  const action = deletePost(1000);
  const newState = profileReducer(state ,action);
  const received = newState.postData.find(post => post.id === action.id )

  expect(received).toBe(undefined);
});
