import * as Cloud from '@google-cloud/storage';

const {
  GOOGLE_CLOUD_PROJECT_ID,
  GOOGLE_CLOUD_CLIENT_EMAIL,
  GOOGLE_CLOUD_PRIVATE_KEY,
} = process.env;

const { Storage } = Cloud;
export const storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  credentials: {
    client_email: GOOGLE_CLOUD_CLIENT_EMAIL,
    private_key: GOOGLE_CLOUD_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  },
});
