import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

const mockAdd = vi.fn()
vi.mock('../hooks/useProducts', () => ({ default: () => ({ addProduct: mockAdd }) }))
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return { ...actual, useNavigate: () => vi.fn() }
})

import AddProduct from '../pages/AddProduct'

test('submits the add product form and calls addProduct', () => {
  render(<AddProduct />)

  fireEvent.change(screen.getByPlaceholderText(/product name/i), { target: { value: 'Test Bean' } })
  fireEvent.change(screen.getByPlaceholderText(/origin/i), { target: { value: 'Testland' } })
  fireEvent.change(screen.getByPlaceholderText(/short description/i), { target: { value: 'Nice' } })
  fireEvent.change(screen.getByPlaceholderText(/price/i), { target: { value: '5.5' } })

  fireEvent.click(screen.getByRole('button', { name: /add/i }))

  expect(mockAdd).toHaveBeenCalled()
})
