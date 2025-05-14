import Toast from 'react-native-simple-toast';
export function simpleToast(msg){
    Toast.showWithGravity(msg,1, Toast.LONG);
    //    Toast.showWithGravity(msg, Toast.LONG, Toast.BOTTOM);
  }