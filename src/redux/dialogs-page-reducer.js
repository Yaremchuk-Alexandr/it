const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Tanya' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Jeka' },
        { id: 5, name: 'Olya' },
      ],
      messages: [
        { id: 1, massage: 'Hi' },
        { id: 2, massage: 'How are you?' },
        { id: 3, massage: 'Hello!' },
      ],

}

const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
     
        case ADD_MESSAGE:
  
            return {
                ...state,
                messages : [...state.messages, {id: 7, massage: action.formData.message }],
            }
        default:
            return {...state}
    }

}

export const addMessage = (formData) => ({ type: ADD_MESSAGE, formData })

export default dialogsPageReducer