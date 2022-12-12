import { isEmpty } from 'lodash';
import moment from "moment";

export const saveToAsyncStorage = async (data: any, key: string) =>{
  
};

export const validateNameAsString = (name: string) => {
  const re = /^[^0-9 *&^$#@!(){}\[\]\\//]+[^0-9*&^$#@!(){}\[\]\\//]+$/;
  return re.test(name);
};

export const formatDate = (date: Date) => {
  return moment(date).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY')
    ? 'Today'
    : moment(date).format('MMM DD');
};

export const validateNumber = (num: string) => {
  const regex1 = /^[-+]?[0-9]*\.?[0-9]?[0-9]?$/;
  const regex2 = /^[-+]?[0-9]*\,?[0-9]?[0-9]?$/;
  const regex3 = /^0(1\d{9}|8\d{8}|9\d{8})$/;
  return regex1.test(num) || regex2.test(num) || regex3.test(num);
};

export const correctURL = (string: string) => {
  if (isEmpty(string) || string?.length === 0) {
    return null;
  }

  if (string.indexOf('tel:') >= 0) {
    return string;
  }

  let url = string;
  if (!string.match('^(https?:\\/\\/)') || string.startsWith('www.')) {
    url = `https://${url}`;
  }
  return url;
};

export const removeExtraSpaces = (str: string) => {
  return str?.replace(/\s+/g, ' ');
};


export const formatCurrency =(value: number)=> {
  if (typeof value === 'number') {
    const parts = value.toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${parts.join('.')}`;
  }

  return '$0.00';
}

export const formatCurrencyWithoutSymbol = (value: number, isCurrency = true) => {
  const style = isCurrency ? '$' : '';
  const parts = value?.toString().split('.');
  if (parts.length === 1) {
    if (`${value?.toString()}`?.endsWith('.')) {
      return `${style}${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.`;
    }
    return `${style}${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  } else {
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${style}${parts.join('.')}`;
  }
};

export const securityEmail = (email: string) => {
  if (!email) {
    return '';
  }
  const security = '***';
  let newEmail = '';
  const emailArr = email.split('@');
  const length = emailArr[0].length;
  if (length <= 1) {
    newEmail = email.replace(email.slice(0, length), security.slice(0, length));
  } else if (length < 4) {
    newEmail = email.replace(email.slice(1, length), security.slice(0, length - 1));
  } else {
    newEmail = email.replace(email.slice(1, 4), security);
  }

  return newEmail;
};

export const change_alias = (alias: string) => {
  let str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ {2}|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ {2}|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
    '-',
  );
  str = str.replace(/-+-/g, '-');
  str = str.replace(/^\-+|\-+$/g, '');
  return str;
};

const getAddressComponentValueByKey = (addressComponents: any, key: string, valueType = 'long_name') => {
  const addressComponent = addressComponents?.find((item: any) => item.types?.[0] === key);
  return addressComponent?.[valueType] || null;
};

const parseGooglePlace = (data: any, details: any) => {
  const addressComponents = details?.address_components;
  return {
    address: data?.structured_formatting?.main_text || data?.description || null,
    suburb:
      getAddressComponentValueByKey(addressComponents, 'locality') ||
      getAddressComponentValueByKey(addressComponents, 'colloquial_area'),
    state: getAddressComponentValueByKey(
      addressComponents,
      'administrative_area_level_1',
      'short_name',
    ),
    postCode: getAddressComponentValueByKey(addressComponents, 'postal_code') || null,
    geolocation: details?.geometry?.location || null,
  };
};

export default parseGooglePlace;
