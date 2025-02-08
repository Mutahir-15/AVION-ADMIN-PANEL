import React from 'react';

function OrdersPage() {
  const orders = [
    { id: 1, customer: 'John Doe', total: '$100.00', status: 'Completed' },
    { id: 2, customer: 'Jane Smith', total: '$150.00', status: 'Pending' },
    { id: 3, customer: 'Bob Johnson', total: '$200.00', status: 'Shipped' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-[1440px] mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Orders</h1>
          <p className="text-gray-600">Manage and track your orders.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Customer</th>
                <th className="py-2 px-4 border-b">Total</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border-b">{order.id}</td>
                  <td className="py-2 px-4 border-b">{order.customer}</td>
                  <td className="py-2 px-4 border-b">{order.total}</td>
                  <td className="py-2 px-4 border-b">{order.status}</td>
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