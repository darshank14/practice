import { Dimensions } from 'react-native'


var deviceWidth = Dimensions.get('screen').width;
var deviceHeight = Dimensions.get('screen').height;
const STORAGE_KEYS = {
    STORE_IS_AGREE_TERM_CONDISTION_SPLASH: 'store_is_agree_term_condistion_splash',
    STORE_USER_DATA: 'storeLoginData',
    STORE_LOGIN_USER_DATA: 'storeLoginUserData',
    STORE_INVITE_CODE: 'storeInviteCode',
    DEVICE_TOKEN: 'DEVICE_TOKEN',
  
};



const PASSWORD = {
    min: 10,
    max: 10
}

export default {
    SCREEN_WIDTH: deviceWidth,
    SCREEN_HEIGHT: deviceHeight,
    IS_INTERNET_AVAILABLE: true,
    DEBUG_MODE: false,
    UPLOAD_IMAGE_FILE_SIZE: 10 * 1024 * 1024,
    STORAGE_KEYS,
    PASSWORD
}