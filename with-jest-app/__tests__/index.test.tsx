import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders heading', () => {
    render(<Home />)
    const input = screen.getByText('Integer To Roman Calculator')
    expect(input).toBeInTheDocument()
  })
})
