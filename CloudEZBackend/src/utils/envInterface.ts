import * as dotenv from 'dotenv';

export interface EnvVars {
  PORT: number;
  TCP_PORT: number;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DBNAME: string;
  CORS_ALLOWED_ORIGINS: string[];
  JWT_SECRET_KEY: string;
  AWS_KEY:  string ,
      AWS_SECRET: string ,
      REGION: string,
}

const pathExt: string = process.env.NODE_ENV ? '.' + process.env.NODE_ENV : '';
dotenv.config({ path: `.env${pathExt}` });
