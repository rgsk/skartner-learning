export type AppEnvironment = "development" | "staging" | "production";

const environmentVars = {
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV as AppEnvironment,
};
export default environmentVars;
