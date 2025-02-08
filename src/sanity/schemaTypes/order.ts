export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      
      {
        name: 'customer',
        title: 'Customer',
        type: 'string',
      },
      {
        name: 'total',
        title: 'Total',
        type: 'number',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Completed', value: 'completed' },
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
          ],
        },
      },
    ],
  };