'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  interface Order {
    _id: number;
    customer: string;
    total: number;
    status: string;
  }

  useEffect(() => {
    client.fetch(
        `*[_type == "order"]{
          _id,
          customer,
          total,
          status
        }`
      )
      .then((data) => setOrders(data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-[1440px] mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Orders</h1>
          <p className="text-gray-600">Manage and track your orders.</p>
        </div>
        <div className="overflow-x-auto text-center">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Customer</th>
                <th className="py-2 px-4 border-b">Total</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="py-2 px-4 border-b">{order._id}</td>
                  <td className="py-2 px-4 border-b">{order.customer}</td>
                  <td className="py-2 px-4 border-b">${order.total}</td>
                  <td className="py-2 px-4 border-b">{order.status}</td>
                  <td className="py-2 px-4 border-b">
                    <Link href={`/orders/${order._id}`}>
                      <span className="text-blue-500 hover:underline cursor-pointer">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default OrdersPage;