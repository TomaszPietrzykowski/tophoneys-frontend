import { render, screen } from "@testing-library/react"
import App from "./App"
import { Provider } from "react-redux"
import store from "./store"

it("renders navigation", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const linkElements = screen.getAllByText(/home/i)
  expect(linkElements.length).toBe(2)
})
it("renders footer", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const linkElements = screen.getByText(/general conditions/i)
  expect(linkElements).toBeInTheDocument()
})
// it("renders dynamic content", async () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
//   const linkElements = await screen.findAllByText(/add to cart/i)
//   expect(linkElements).toBeInstanceOf(Array)
// })
