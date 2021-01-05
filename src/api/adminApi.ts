import axios from 'axios';

const apiVersion = 'v1';
const apiRoot = (): string => {
  if (window.location.origin.includes('ttlf.net')) {
    return 'https://admin.ttlf.net';
  }
  return 'http://localhost:5000';
};

const getSiteConfig = async (): Promise<any> => {
  const siteConfig = await axios.get(`${apiRoot()}/api/${apiVersion}/siteConfig`);
  return siteConfig.data;
};

export default getSiteConfig;
