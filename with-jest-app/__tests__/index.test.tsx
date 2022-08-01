import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import { CONSTANTS } from '@/pages/_constants'

describe('Home', () => {
  it('renders heading', () => {
    render(<Home />)
    const input = screen.getByText(CONSTANTS.HEADING)
    expect(input).toBeInTheDocument()
  })
})
