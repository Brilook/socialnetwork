import {
  profileAPI
} from "../components/api/ProfileAPI";
import {
  myAPI
} from "../components/api/myAPI";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const initialState = {
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
  newPostText: '',
  profile: null,
  status: ``,

};

const profileReducer = (state = initialState, action) => {

  const stateCopy = {
    ...state
  };

  switch (action.type) {

    case ADD_POST: {

      const newPost = {
        id: state.postData.length + 1,
        message: action.newPostBody,
        likesCount: 0,
      };

      stateCopy.postData = [newPost, ...state.postData];
      break;
    }
    case SET_USER_PROFILE: {
      stateCopy.profile = action.profile;
      break;
    }
    case SET_STATUS: {
      stateCopy.status = action.status;
      break;
    }
    default:
      return stateCopy;
  }
  return stateCopy;

}

export const addPostCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody
});
const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});
const setStatus = (status) => ({
  type: SET_STATUS,
  status
});

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
    .then(data => {

      dispatch(setUserProfile(data));
    })
};
export const getMyProfile = () => (dispatch) => {
  myAPI.getMe()
    .then(response => {
      profileAPI.getProfile(response.data.id)
        .then(data => {
          dispatch(setUserProfile(data));
        })

    })
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(data => {
      dispatch(setStatus(data))
    })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}


export default profileReducer;