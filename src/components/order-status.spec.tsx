import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text based on order status pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')
    const badgeStatus = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeStatus).toHaveClass('bg-slate-400')
  })

  it('should display the right text based on order status canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    const badgeStatus = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeStatus).toHaveClass('bg-rose-500')
  })

  it('should display the right text based on order status processing', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em entrega')
    const badgeStatus = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeStatus).toHaveClass('bg-amber-500')
  })

  it('should display the right text based on order status delivering', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    const badgeStatus = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeStatus).toHaveClass('bg-amber-500')
  })

  it('should display the right text based on order status delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    const badgeStatus = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeStatus).toHaveClass('bg-emerald-500')
  })
})
