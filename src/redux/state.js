//Old state withOut Redux


// import profilePageReducer from './profile-page-reducer';
// import dialogsPageReducer from './dialogs-page-reducer';
// import navbarReducer from './navbar-reducer';


// let store = {

//   _state: {
//     dialogsPage: {
//       dialogs: [
//         { id: 1, name: 'Sasha' },
//         { id: 2, name: 'Tanya' },
//         { id: 3, name: 'Dima' },
//         { id: 4, name: 'Jeka' },
//         { id: 5, name: 'Olya' },
//       ],
//       messages: [
//         { id: 1, massage: 'Hi' },
//         { id: 2, massage: 'How are you?' },
//         { id: 3, massage: 'Hello!' },
//       ],

//       newMessageText: 'new message'

//     },
//     profilePage: {
//       posts: [
//         { id: 1, message: 'Hello guys !!!', like: 5 },
//         { id: 2, message: 'Hi! how are you ?', like: 7 },
//         { id: 3, message: 'I am fine, and you?', like: 0 },
//         { id: 4, message: 'I am fine, and you?', like: 1 }
//       ],

//       newPostText: 'new post'
//     },
//     navbar: {
//       friends: [
//         { id: 1, url: 'https://www.lambdatest.com/resources/images/header/slack.svg', name: 'Alex' },
//         { id: 2, url: 'https://www.lambdatest.com/resources/images/header/slack.svg', name: 'Jeka' },
//         { id: 3, url: 'https://www.lambdatest.com/resources/images/header/slack.svg', name: 'Dimych' }
//       ]
//     }
//   },

//   _callsubscriber() {
//     console.log('state change ');
//   },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callsubscriber = observer
//   },

//   dispatch (action) {
//     this._state.profilePage = profilePageReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
//     this._state.navbar = navbarReducer(this._state.navbar, action)
//     this._callsubscriber(this._state)
//   } 

// }
 


// export default store;


