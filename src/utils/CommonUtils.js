import DeviceInfo from "react-native-device-info";
import Config from "../config";


const isTab = () => {
    return DeviceInfo.isTablet();
}

const isIPad = () => {
    let systemName = DeviceInfo.getSystemName()
    return systemName === 'iPadOS' ? 'ipad' : 'ios';
}

export const widthPercentageToDP = (per) => {
    return Config.Enum.SCREEN_WIDTH * parseFloat(per) / 100;
};

export const heightPercentageToDP = (per) => {
    return Config.Enum.SCREEN_HEIGHT * parseFloat(per) / 100;
};

const manageWidthPer = (size) => isTab() ? `${size * 0.7}%` : `${size}%`;



  export  const formatDate = isoString => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // month is 0-indexed
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };



const cloneDeep = (data) => {
    const cloned = JSON.parse(JSON.stringify(data));
    return cloned;
};



const log = (string, message) => {
    console.log(string, message)
}

export default {
    isIPad,
    isTab,    
    cloneDeep,
    manageWidthPer,
    widthPercentageToDP,
    heightPercentageToDP,
    log,
}