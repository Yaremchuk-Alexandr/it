import axios from "axios";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '9192d1c4-6459-423b-a226-5da62a4fc6a6'
    }
})

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

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce =>{
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
        return instance.get(`auth/me`)
        .then(responce =>{
            return responce.data
        })
    },
    logOutMe(){
        return instance.delete(`auth/login`)
        .then(responce =>{
            return responce.data
        })
    },

    makeUnfolowUser(id){
        return instance.delete(`follow/${id}`)
        .then(responce =>{
            return responce.data
        })
    },

    makefolowUser(id){
        return instance.post(`follow/${id}`)
        .then(responce =>{
            return responce.data
        })
    },

    getUserProfile(id){
        return instance.get(id ? 'profile/'+id : 'profile/'+ 2)
        .then(responce => {
            return responce
        })
    },
    getUserLogin(formData){
        return instance.post('auth/login/', formData)
        .then(responce=>{
            return responce
        })
    }

}
export const userStatusApi = {
    
    getUserStatus (userId){
        return instance.get(`profile/status/`+ userId)  
    },

    updateUserStatus (status){
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