import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../store"
import { BrowserRouter } from "react-router-dom"
import ProductCard from "../ProductCard"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../../components/Theme"
import testResponse from "../../config/testResponse"

const mockedProduct = testResponse.data.products[0]

describe("Renders data from passed product", () => {
  it("renders image", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ProductCard product={mockedProduct} />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const img = await screen.findByRole("img")
    expect(img).toBeInTheDocument()
  })

  it("renders passed title", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ProductCard product={{ ...mockedProduct, name: "Test name" }} />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const title = await screen.findByText(/test name/i)
    expect(title).toBeInTheDocument()
  })
})
