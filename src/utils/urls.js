export const url =
  process?.env?.VERCEL_ENV === "production"
    ? `https://${process.env.VERCEL_URL}/api`
    : process.env.LOCAL_URL

export const api_url =
  process?.env?.VERCEL_ENV === "production"
    ? process.env.PROD_STRAPI_URL
    : process.env.PROD_STRAPI_URL; 
