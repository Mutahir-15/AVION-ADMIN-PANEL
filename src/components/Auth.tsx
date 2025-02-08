import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const { token } = parseCookies();

    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, [token]);

    return token ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;