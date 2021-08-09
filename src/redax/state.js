import {rerenderEntriesTree} from "../render";

 const state = {

  profilePage: {
    postData : [
      {id: 1, message: 'hi, how are you?', likesCount: 24},
      {id: 2, message: 'it\'s my first post!', likesCount: 42},
      {id: 3, message: 'Where does it come from\n? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', likesCount: 42},
      {id: 4, message: 'it\'s my first post!Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        , likesCount: 42},
    ],
    newPostText: '',
  },

  messagePage: {

    dialogsData :[
      {id: '1', name: 'Brilook'},
      {id: '2', name: 'Dimych'},
      {id: '3', name: 'Anya'},
      {id: '4', name: 'Pavek'},
      {id: '5', name: 'Dariya'},
      {id: '6', name: 'Toma'},
      {id: '7', name: 'Olya'},
      {id: '8', name: 'Polya'},
    ],

    messageData : [
      {id: '1', message: '111111111111'},
      {id: '2', message: '222222222222'},
      {id: '3', message: '33333333333'},
      {id: '4', message: '44444'},
      {id: '5', message: '5555555555'},
      {id: '6', message: '6666666'},
      {id: '7', message: '7777777777'},
      {id: '8', message: '88888888'},
    ],
      },

}

window.state = state;

export const addPost = () => {
  const newPost = {
    id: state.profilePage.postData.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntriesTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntriesTree(state);
}

export default state;

