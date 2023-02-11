// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const BASE_URL_IMAGE = 'https://cataas.com'

test('apps shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContext = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({ textContext, imageSrc })

  await expect(textContext?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(BASE_URL_IMAGE)).toBeTruthy()
})
