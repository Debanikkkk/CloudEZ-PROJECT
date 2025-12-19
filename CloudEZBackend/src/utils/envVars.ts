import * as dotenv from 'dotenv';
import { EnvVars } from './envInterface';

dotenv.config();

export const envs: EnvVars = {
  PORT: parseInt(process.env.PORT || '3000'),
  TCP_PORT: parseInt(process.env.TCP_PORT || '65432'),

  DB_HOST: process.env.DB_HOST || '',
  DB_PORT: parseInt(process.env.DB_PORT || '5432'),
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_DBNAME: process.env.DB_DBNAME || '',

  CORS_ALLOWED_ORIGINS:
    process.env.CORS_ALLOWED_ORIGINS?.split(',') || ['*'],

  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || '',

  AWS_KEY: process.env.AWS_ACCESS_KEY_ID || '',
  AWS_SECRET: process.env.AWS_SECRET_ACCESS_KEY || '',
  REGION: process.env.AWS_REGION || 'ap-south-1'
};
