'use client'
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

interface OrderEditPageProps {
  orderId: string;
}

function OrderEditPage({ orderId }: OrderEditPageProps) {
  interface Order {
    _id: string;
    customer: string;
    total: number;
    status: string;
  }

  const [order, setOrder] = useState<Order | null>(null);
  const [formData, setFormData] = useState({
    customer: '',
    total: '',
    status: '',
  });

  useEffect(() => {
    if (orderId) {
      client
        .fetch(`*[_type == "order" && _id == $orderId]{_id, customer, total, status}`, { orderId })
        .then((data) => {
          setOrder(data[0]);
          setFormData({
            customer: data[0].customer,
            total: data[0].total,
            status: data[0].status,
          });
        })
        .catch(console.error);
    }
  }, [orderId]);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (order) {
      client
        .patch(order._id)
        .set(formData)
        .commit()
        .then(() => {
          alert('Order updated successfully!');
          window.location.href = '/orders';
        })
        .catch(console.error);
    }
  };

  if (!order) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-[1440px] mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Edit Order</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Customer</label>
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Total</label>
            <input
              type="number"
              name="total"
              value={formData.total}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="shipped">Shipped</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Update Order
          </button>
        </form>
      </section>
    </div>
  );
}

export default OrderEditPage;