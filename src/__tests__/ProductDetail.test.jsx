import React from 'react'
import { act, render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

const mockEdit = vi.fn()
const mockRemove = vi.fn()
vi.mock('../hooks/useProducts', () => ({ default: () => ({ products: [{ id: 1, name: 'Test Bean', description: 'A test product', origin: 'Testland', price: 8 }], editProduct: mockEdit, removeProduct: mockRemove }) }))
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return { ...actual, useParams: () => ({ id: '1' }), useNavigate: () => vi.fn() }
})

import ProductDetail from '../pages/ProductDetail'

test('updates product price and shows save button', async () => {
  render(<ProductDetail />)

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/new price/i), { target: { value: '12.5' } })
    fireEvent.click(screen.getByRole('button', { name: /save/i }))
  })

  expect(mockEdit).toHaveBeenCalledWith('1', { price: 12.5 })
})

test('deletes a product and navigates back', () => {
  render(<ProductDetail />)

  fireEvent.click(screen.getByRole('button', { name: /delete/i }))

  expect(mockRemove).toHaveBeenCalledWith('1')
})
