export const url =
  process?.env?.VERCEL_ENV == "production"
    ? process.env.VERCEL_URL
    : "http://localhost:3000/api";
