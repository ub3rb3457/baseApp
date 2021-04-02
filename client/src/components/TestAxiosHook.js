import React, { Fragment, useReducer, useState } from 'react'
import axios from 'axios'
import { provideAxiosInstance, usePostCallback } from "use-axios-react"
const Axios = axios.create();
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
provideAxiosInstance(Axios);
function loginRequest({ email, password }) {
    return {
        url: "login",
        data: { email, password }
    };
}
const credentials = { email: 'perchance2dream86@gmail.com', password: 'docWh0922' };
const TestAxiosHook = () => {
  const [login { error, data }] = usePostCallback({
    



import React, {Fragment} from "react";
import useAxios from "@am-hooks/use-axios";

const TestAxiosHook = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "http://localhost:1337/api/auth/login",
    method: 
  });
  console.log(`loading = ${loading},\n error = ${error},\n data = ${JSON.stringify(data)}`);

  return (
    <Fragment>
      <div>{data && data.status}</div>
      <div>{loading && "Loading..."}</div>
      <button onClick={refetch}>Refetch</button>
    </Fragment>
  )
}
export default TestAxiosHook