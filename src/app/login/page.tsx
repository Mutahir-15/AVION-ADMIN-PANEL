import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';

const Auth = dynamic(() => import('@/components/Auth'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function LoginPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get('token');

  // Redirect if already authenticated
  if (authToken?.value === 'authenticated') {
    redirect('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <Auth onLogin={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}