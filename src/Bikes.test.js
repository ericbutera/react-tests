import { render, screen } from '@testing-library/react'
import Bikes from './Bikes'

// https://testing-library.com/docs/react-testing-library/cheatsheet
// https://reactjs.org/docs/testing-recipes.html
// https://github.com/testing-library/react-testing-library#complex-example

it('renders user data', async () => {
  const bike = {
    id: 1,
    brand: 'Yeti',
    model: 'SB100',
    image: 'yeti-sb100.jpg',
  }
  const bikes = {
    bikes: [bike],
  }

  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(bikes) })
    )

  // const container = render(<Bikes id="1" />) TODO: surely there is a way to find within the container instead of search entire screen
  render(<Bikes id="1" />)

  const yeti = await screen.findByText(/SB100/)
  expect(yeti).toBeInTheDocument()

  // remove the mock to ensure tests are completely isolated  global.fetch.mockRestore();});
  global.fetch.mockRestore()
})
