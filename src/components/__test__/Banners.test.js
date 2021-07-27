import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Showcase from "../Showcase"
import SecondaryBanner from "../SecondaryBanner"
import Brands from "../Brands"
import Teasers from "../Teasers"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../../components/Theme"

it("renders main banner", () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Showcase />
      </BrowserRouter>
    </ThemeProvider>
  )
  const img = screen.getByRole("img")
  expect(img).toBeInTheDocument()
})

it("renders secondary banner", () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SecondaryBanner />
      </BrowserRouter>
    </ThemeProvider>
  )
  const img = screen.getByRole("img")
  expect(img).toBeInTheDocument()
})

it("renders teasers", () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Teasers />
      </BrowserRouter>
    </ThemeProvider>
  )
  const imgs = screen.getAllByRole("img")
  expect(imgs.length).toBe(3)
})

it("renders payment methods logos", () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Brands />
      </BrowserRouter>
    </ThemeProvider>
  )
  const imgs = screen.getAllByRole("img")
  expect(imgs.length).toBeGreaterThan(5)
})
