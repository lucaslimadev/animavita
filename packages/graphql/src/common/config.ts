import path from 'path';

import dotEnvSafe from 'dotenv-safe';
import envVar from 'env-var';

import {version} from '../../package.json';

export const PACKAGE_VERSION = version;

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotEnvSafe.config({
  allowEmptyValues: true,
  path: root('.env'),
  sample: root('.env.example'),
});

export const COMMIT_SHA = envVar
  .get('COMMIT_SHA')
  .required()
  .asString();

export const JWT_KEY = envVar
  .get('JWT_KEY')
  .required()
  .asString();

export const DEBUG_GRAPHQL = envVar.get('DEBUG_GRAPHQL', 'false').asBoolStrict();

// Ports
export const GRAPHQL_PORT = envVar.get('GRAPHQL_PORT', '5001').asPortNumber();

// AWS
export const AWS_S3_BUCKET_NAME = envVar.get('AWS_S3_BUCKET_NAME').asString();
export const AWS_REGION = envVar.get('AWS_REGION').asString();
export const AWS_CLOUD_FORMATION_STACK_NAME = envVar.get('AWS_CLOUD_FORMATION_STACK_NAME').asString();