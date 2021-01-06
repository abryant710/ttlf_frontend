import axios from 'axios';
import { SiteConfig } from '../types';

const apiVersion = 'v1';
const apiRoot = (): string => {
  if (window.location.origin.includes('ttlf.net')) {
    return 'https://admin.ttlf.net';
  }
  return 'http://localhost:5000';
};

const getSiteConfig = async (): Promise<SiteConfig> => {
  const siteConfig = await axios.get(`${apiRoot()}/api/${apiVersion}/siteConfig`);
  return siteConfig.data;
};

export default getSiteConfig;
