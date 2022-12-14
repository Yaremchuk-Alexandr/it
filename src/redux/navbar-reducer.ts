
let initialState: initialStateType = {
    friends: [
        { id: 1, url: 'https://www.lambdatest.com/resources/images/header/slack.svg', name: 'Alex' },
        { id: 2, url: 'https://www.lambdatest.com/resources/images/header/slack.svg', name: 'Jeka' },
        { id: 3, url: 'https://www.lambdatest.com/resources/images/header/slack.svg', name: 'Dimych' }
      ]
}

const navbarReducer =(state = initialState, action:any):initialStateType =>{
    return {...state}
}

export default navbarReducer

type friendType={
    id:number,
    url:string,
    name:string
} 
type initialStateType = {
    friends: Array<friendType>
}