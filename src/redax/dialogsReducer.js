const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY'

const initialState = {

  dialogsData: [
    {id: 1, name: 'Brilook'},
    {id: 2, name: 'Dimych'},
    {id: 3, name: 'Anya'},
    {id: 4, name: 'Pavek'},
    {id: 5, name: 'Dariya'},
    {id: 6, name: 'Toma'},
    {id: 7, name: 'Olya'},
    {id: 8, name: 'Polya'},
  ],

  messageData: [
    {id: 1, message: '111111111111'},
    {id: 2, message: '222222222222'},
    {id: 3, message: '33333333333'},
    {id: 4, message: '44444'},
    {id: 5, message: '5555555555'},
    {id: 6, message: '6666666'},
    {id: 7, message: '7777777777'},
    {id: 8, message: '88888888'},
    {id: 9, message: 'test'},
  ],

  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: state.messageData.length + 1,
        message: state.newMessageBody,
      };
      if (state.newMessageBody !== '') {
        state.messageData.push(newMessage);
        state.newMessageBody = '';
      } else {
        console.log('Lets write message');
      }
      break;
    case UPDATE_MESSAGE_BODY:
      state.newMessageBody = action.newBody;
      break;
    default:
      return state;
  }

  return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateMessageBodyCreator = (newBody) => ({
  type: UPDATE_MESSAGE_BODY,
  newBody: newBody,
})

export default dialogsReducer;