import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@exemple.com')
  await page.getByLabel('Seu celular').fill('123487592556')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  expect(page.getByText('Restaurante cadastrado com sucesso!')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Shop Pizza')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@exemple.com')
  await page.getByLabel('Seu celular').fill('123487592556')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  expect(page.getByText('Erro ao cadastrar restaurante.')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('can navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')

  await page.waitForTimeout(2000)
})
