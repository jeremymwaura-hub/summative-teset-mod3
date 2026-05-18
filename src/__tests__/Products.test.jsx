import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

const testProducts = [
  { id: 1, name: 'A bean', description: 'First', origin: 'X', price: 1 },
  { id: 2, name: 'B roast', description: 'Second', origin: 'Y', price: 2 }
]

vi.mock('../hooks/useProducts', () => ({ default: () => ({ products: testProducts }) }))

import Products from '../pages/Products'

test('filters products by search query', () => {
  render(<Products />)

  expect(screen.getByText(/a bean/i)).toBeInTheDocument()
  expect(screen.getByText(/b roast/i)).toBeInTheDocument()

  fireEvent.change(screen.getByRole('textbox', { name: /search/i }), { target: { value: 'a bean' } })

  expect(screen.getByText(/a bean/i)).toBeInTheDocument()
  expect(screen.queryByText(/b roast/i)).toBeNull()
})
