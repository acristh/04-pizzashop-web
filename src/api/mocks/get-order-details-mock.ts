import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      phone: '12345678954522',
    },
    status: 'delivering',
    createdAt: new Date().toISOString(),
    totalInCents: 10000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 3500,
        product: {
          name: 'Pizza Pepperoni',
        },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 3000,
        product: {
          name: 'Pizza Marguerita',
        },
        quantity: 1,
      },
    ],
  })
})
