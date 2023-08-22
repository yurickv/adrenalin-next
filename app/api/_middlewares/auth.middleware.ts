import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/_lib/auth';
import { Unauthorized } from '@/app/api/_helpers/errors';

export const authMiddleware = async () => {
  const session = await getServerSession(authOptions);
  const isUserLogged = session?.user;

  if (!isUserLogged) {
    throw new Unauthorized('You are not logged');
  }

  return isUserLogged;
};
