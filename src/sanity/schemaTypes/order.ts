export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: '_id',
        title: 'Id',
        type: 'number',
      },
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