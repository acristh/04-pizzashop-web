import { api } from '@/lib/axios'

export interface GetMonthCanceledOrders {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrders() {
  const response = await api.get<GetMonthCanceledOrders>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
