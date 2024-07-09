export const url =
  process?.env?.VERCEL_ENV === "production"
    ? `https://${process.env.VERCEL_URL}/api`
    : "http://localhost:3000/api";
