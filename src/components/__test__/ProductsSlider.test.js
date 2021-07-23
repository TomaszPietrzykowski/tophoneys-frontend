import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../store"
import { BrowserRouter } from "react-router-dom"
import ProductsSlider from "../ProductsSlider"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../../components/Theme"

describe("Functionality", () => {
  it("renders passed to props title", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ProductsSlider
              title="Test Title"
              endpoint="honeys"
              timeout={3000}
            />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const title = await screen.findByText(/test title/i)
    expect(title).toBeInTheDocument()
  })
  it("renders dynamic content", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ProductsSlider
              title="Test Title"
              endpoint="honeys"
              timeout={3000}
            />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const buttons = await screen.findAllByText(/add to cart/i)
    expect(buttons.length).toBeGreaterThan(2)
  })
})

describe("Display", () => {
  it("renders images", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ProductsSlider
              title="Test Title"
              endpoint="honeys"
              timeout={3000}
            />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const imgs = await screen.findAllByRole("img")
    expect(imgs.length).toBeGreaterThan(0)
  })

  it("renders buttons", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ProductsSlider
              title="Test Title"
              endpoint="honeys"
              timeout={3000}
            />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const buttons = await screen.findAllByRole("button")
    expect(buttons.length).toBeGreaterThan(2)
  })
})
