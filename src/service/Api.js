import axios from 'axios';
import {logout} from '../redux/AuthSlice';
import {store} from '../redux/Store';
import {
  BASE_URL,
} from './apiEndPoint';

import { Platform } from 'react-native';
import { simpleToast } from '../utils/Toast';

const Api = axios.create({
  baseURL: BASE_URL,
});

Api.interceptors.request.use(req => {
  console.log(req.baseURL + req.url);
  const token = store?.getState()?.AuthSlice?.token;
  req.headers['Content-Type'] = 'multipart/form-data';
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});


Api.interceptors.response.use(
  async response => {
    // console.log("api res:-"+response.data?.message);


    if (response.data.status === 'RC300') {
      store.dispatch(logout());
      simpleToast(response?.message);
    }

    if (response?.data?.status === 'RC200') {
      if (response?.data?.message != 'Token updated successfully') {
        response?.data?.message && simpleToast(response?.data?.message);
      }

      return response?.data;
    }

    if (response.data.status === 'RC100') {
      simpleToast(response?.data?.message);
      return false;
    }

    if (response.data.status === 'RC400') {
      store.dispatch(logout());
    } else {
     
      simpleToast(response.data?.message);
      return response?.data;
    }
  },
  error => {
    console.log(error);
    return '';
  },
);

export default Api;

