import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrders } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrders
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: -5,
  })
})
