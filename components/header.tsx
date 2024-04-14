'use client';

import { useUserSession } from '@/hooks/use-user-session';
import { signInWithGoogle, signOutWithGoogle } from '@/libs/firebase/auth';

export function Header({ session }: { session: string | null }) {
  const userSessionId = useUserSession(session);

  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
  };

  if (!userSessionId) {
    return (
      <header>
        <button onClick={handleSignIn}>Sign In</button>
      </header>
    );
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href='#'>Menu A</a>
          </li>
          <li>
            <a href='#'>Menu B</a>
          </li>
          <li>
            <a href='#'>Menu C</a>
          </li>
        </ul>
      </nav>
      <button onClick={handleSignOut}>Sign Out</button>
    </header>
  );
}

export default Header;
