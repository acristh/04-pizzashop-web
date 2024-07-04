import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { queryClient } from '@/lib/react-query'

import { SignIn } from './sign-in'

describe('SignIn', () => {
  it('should set default email input value if is present on search params', () => {
    const wrapper = render(
      <>
        <SignIn />
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter
              initialEntries={['/sign-in?email=johndoe@exemple.com']}
            >
              <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                  {children}
                </QueryClientProvider>
              </HelmetProvider>
            </MemoryRouter>
          )
        },
      },
    )

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('johndoe@exemple.com')
  })
})
