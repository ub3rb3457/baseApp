import axios from "axios";

let http = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-type": "application/json"
  }
});


async function login(userData=null, options={}){
  let config = {
    url: "/auth/login", 
    data: {
      email:     "perchance2dream86@gmail.com",
      password:  ""
    },
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  };
  try {
    const response = await http.post(Object.assign(config, options));
    console.log(response);  
  } catch(error){
    console.error(error);
  };
 
}

async function register(newUserData, options={}){
  let config = {
    url: "/auth/register", 
    data: newUserData,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  };
  try {
    const response = await http.post(Object.assign(config, options));
    console.log(response);  
  } catch(error){
    console.error(error);
  };
 
}

function getAll(){
  return http.get(`/materials`);
}

function getOne(id) {
  return http.get(`/materials/${id}`);
}

function create(data){
  return http.post("/materials", data);
}

function update(id, data){
  return http.put(`/materials/${id}`, data);
}

function remove(id){
  return http.delete(`/materials/${id}`);
}

function removeAll(){
  return http.delete(`/materials`);
}

function findByTitle(title){
  return http.get(`/materials?title=${title}`);
}

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};