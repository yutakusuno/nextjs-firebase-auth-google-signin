import { useEffect, useState } from 'react';

import { onAuthStateChanged } from '../libs/firebase/auth';
import { createSession, removeSession } from '@/actions/auth-actions';

export function useUserSession(InitSession: string | null) {
  const [userUid, setUserUid] = useState<string | null>(InitSession);

  // Listen for changes to the user session
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUserUid(authUser.uid);
        await createSession(authUser.uid);
      } else {
        setUserUid(null);
        await removeSession();
      }
    });

    return () => unsubscribe();
  }, []);

  return userUid;
}
