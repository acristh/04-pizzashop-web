import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '27/06/2024', receipt: 650 },
    { date: '28/06/2024', receipt: 125 },
    { date: '29/06/2024', receipt: 400 },
    { date: '30/06/2024', receipt: 345 },
    { date: '01/07/2024', receipt: 678 },
    { date: '02/07/2024', receipt: 413 },
    { date: '03/07/2024', receipt: 750 },
    { date: '04/07/2024', receipt: 800 },
  ])
})
