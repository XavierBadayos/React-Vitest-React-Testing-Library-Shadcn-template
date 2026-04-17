import { render, screen } from '@testing-library/react'

test('basic test works', () => {
  render(<div>Hello</div>)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})