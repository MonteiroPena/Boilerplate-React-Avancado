import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correcty', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' })
  })
})
