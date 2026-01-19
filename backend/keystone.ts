import { statelessSessions } from '@keystone-6/core/session';
import { createAuth } from '@keystone-6/auth';
import { config } from '@keystone-6/core';
import 'dotenv/config';

import { lists } from './schema';

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('The SESSION_SECRET environment variable must be set in production');
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
  }
}

const sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const auth = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'id',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

const frontendUrl = process.env.FRONTEND_URL;

if (!frontendUrl) {
  throw new Error(`Where's your FRONTEND_URL dude`);
}

export default auth.withAuth(
  config({
    server: {
      cors: {
        origin: [frontendUrl],
        credentials: true,
      },
    },
    db: {
      provider: 'postgresql',
      url: `${process.env.DATABASE_URL}?pool_timeout=0`,
      enableLogging: true,
      idField: { kind: 'uuid' },
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session: statelessSessions({
      maxAge: sessionMaxAge,
      secret: sessionSecret,
    }),
  })
);
