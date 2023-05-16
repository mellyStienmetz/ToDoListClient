import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5005/todoitems';
axios.defaults.baseURL = process.env.REACT_APP_BASE;
axios.interceptors.request.use(function (config) {
  console.log("config",config);
  return config;
}, function (error) {
  console.log("error",error)
  return Promise.reject(error);
});
export default {
  getTasks: async () => {
    const result = await axios.get()    
    return result.data;
  },

  addTask: async(name)=>{
  //  console.log('addTask', name)
    const result = await axios.post(`/${name}`)    
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
  //  console.log('setCompleted', {id, isComplete})
    const result = await axios.put(`/${id}`)    
    return result.data;
  },

  deleteTask:async(id)=>{
   // console.log('deleteTask')
    const result = await axios.delete(`/${id}`)    
    return result.data;
  }
};
