const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState: dialogInitialState = {
    dialogs: [
        // { id: 1, name: 'Sasha' },
        // { id: 2, name: 'Tanya' },
        // { id: 3, name: 'Dima' },
        { id: 4, name: 'Jeka' },
        { id: 5, name: 'Olya' },
    ],
    messages: [
        { id: 1, massage: 'Hi' },
        { id: 2, massage: 'How are you?' },
        { id: 3, massage: 'Hello!' },
    ],

}

const dialogsPageReducer = (state = initialState, action: addMessageType): dialogInitialState => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: Math.random() * 100, massage: action.formData.massage }],
            }
        default:
            return { ...state }
    }
}

export const addMessage = (formData: any): addMessageType => ({ type: ADD_MESSAGE, formData })
export default dialogsPageReducer

type dialogType = {
    id: number,
    name: string
}
type massageType = {
    id: number,
    massage: string
}
type dialogsType = Array<dialogType>
type messagesType = Array<massageType>
export type dialogInitialState = {
    dialogs: dialogsType,
    messages: messagesType
}
type addMessageType = {
    type: typeof ADD_MESSAGE
    formData: any
}