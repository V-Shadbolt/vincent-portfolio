import axios from 'axios';
import axiosRetry from 'axios-retry';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

axiosRetry(axios, { retries: 3 })

export const fetchProjects = async () => {
  try{
    const url = `${serverRuntimeConfig.STRAPI_BASE_URL}/api/projects?populate=image&populate[1]=technologies.image&sort=date%3Adesc`;
    const config = {
      headers: { Authorization: `Bearer ${serverRuntimeConfig.STRAPI_API_KEY}` }
    };
    const res = await axios.get(url,config);

    //console.log("fetching ", res.data.data)

    return res.data.data;
  } catch (err) {
    console.warn(err)
    return null
  }
}
