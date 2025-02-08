'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();
    const { token } = parseCookies();

    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, [token, router]);

    return token ? <WrappedComponent {...props} /> : null;
  };

  AuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthComponent;
};

export default withAuth;