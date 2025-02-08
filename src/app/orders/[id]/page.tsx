'use client'
import { useParams } from 'next/navigation';
import OrderEditPage from '@/components/OrderEditPage';

export default function EditOrder() {
  const { id } = useParams();

  if (!id) return <div>Loading...</div>;

  return <OrderEditPage orderId={id as string} />;
}