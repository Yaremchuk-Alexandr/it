import axios from "axios";
import { userType } from "../redux/users-page-reducer";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '9192d1c4-6459-423b-a226-5da62a4fc6a6'
    }
})
/// MUSIC API 
const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: {locale: 'en-US', pageSize: '10', startFrom: '1'},
    headers: {
      'X-RapidAPI-Key': '7edb9b442amsh7153f11aa893b7dp1f35a8jsn92fb1e630a1a',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
export const getMusic = {
    async getMusicList(){
        const response = await axios.request(options);
        return response.data.tracks;
    }    
}    

  export const searchMusic = {
    
    async searchMusiclist(term:any){
        const optionsSearch  = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: {term:term, locale: 'en-US', offset: '1', limit: '5'},
            headers: {
              'X-RapidAPI-Key': '7edb9b442amsh7153f11aa893b7dp1f35a8jsn92fb1e630a1a',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
          };
        const response = await axios.request(optionsSearch);
        return response.data.tracks.hits
    }    
}    


export enum ResultCodesEnum{
    Succes = 0,
    Error = 1
}
type getAuthMeType ={
    data:{userId: number, email:string, login:string, resultCode: number}
    resultCode:ResultCodesEnum
    messages:Array<string>
}
 type logAutMeType ={
    resultCode:ResultCodesEnum
    messages: Array<String>
    data: {}
 }
type getUsersType ={
    items: Array<userType>
    totalCount: number
    error?:string
}
type makeFollowUnfolowUserType = {
    resultCode:ResultCodesEnum
    messages:Array<string>
    data:{}
}
type userProf ={
    id: number
    name:string
    status:string
    photos:{
        small:string
        large:string
    }
    followed:boolean
}
type UserProfileType ={
    items : Array<userProf>
    totalCount:number
    error?: string
}
export const userAPI = {
    getUsers(currentPage:number = 1, pageSize:number = 5){
        return instance.get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce =>{
            return responce.data
        })
    },
    findUsers( term: string, friend:boolean){
        return instance.get(`users?term=${term}&friend=${friend}`)
        .then(responce=>{
            return responce.data
        })
    },
    getPageChanges(pageNumber = 1, pageSize = 5){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(responce =>{
            return responce.data
        })
    },

    getauthMe(){
        return instance.get<getAuthMeType>(`auth/me`)
        .then(responce =>{
            return responce.data
        })
    },
    logOutMe(){
        return instance.delete<logAutMeType>(`auth/login`)
        .then(responce =>{
            return responce.data
        })
    },

    makeUnfolowUser(id:number){
        return instance.delete<makeFollowUnfolowUserType>(`follow/${id}`)
        .then(responce =>{
            return responce.data
        })
    },

    makefolowUser(id:number){
        return instance.post<makeFollowUnfolowUserType>(`follow/${id}`)
        .then(responce =>{
            return responce.data
        })
    },

    getUserProfile(id:number){
        return instance.get<UserProfileType>(id ? 'profile/'+id : 'profile/'+ 25930)
        .then(responce => {
            return responce
        })
    },

   
    
    getUserLogin(formData:formData){
        return instance.post('auth/login/', formData)
        .then( responce =>{
            return responce;
        })
    }

}
type formData= {
    email: string
    password: string
    rememberMe: boolean
}
export const userStatusApi = {
    
    getUserStatus (userId:number = 25930){
        return instance.get(`profile/status/`+ userId)  
    },

    updateUserStatus (status:string){
        return instance.put(`profile/status/ `, {status})    
    },

    getMyStatus (userId=25930){
        return instance.get(`profile/status/`+ userId)  
    },
}


//// GET NEWS


var optionsNews = {
    withCredentials: true,
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: 'News', lang: 'en', sort_by: 'relevancy', page: '1', page_size:'10'},
    headers: {
      'x-api-key': 'H_afjucacoqMeFxfJ6TXSBg3SO2ywZ5leBO6pZq0bT0'
    }
  };
  
export const getNewsList = {
    async getNews(){
        const response = await axios.request(optionsNews)
        return response.data.articles
       
    }
}

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });