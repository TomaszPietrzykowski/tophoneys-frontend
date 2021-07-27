import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../store"
import { BrowserRouter } from "react-router-dom"
import AboutHoneyScreen from "../AboutHoneyScreen"
import AboutUsScreen from "../AboutUsScreen"
import ContactScreen from "../ContactScreen"
import GeneralConditionsScreen from "../GeneralConditionsScreen"
import InfoPaymentScreen from "../InfoPaymentScreen"
import InfoShippingScreen from "../InfoShippingScreen"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../../components/Theme"

// About Honey
describe("About Honey Screen", () => {
  it("renders single h1 - About Honey", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutHoneyScreen />
      </ThemeProvider>
    )
    const header = screen.getByRole("heading")
    expect(header).toBeInTheDocument()
  })

  it("renders images - About Honey", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutHoneyScreen />
      </ThemeProvider>
    )
    const imgs = screen.getAllByRole("img")
    expect(imgs.length).toBeGreaterThan(2)
  })

  it("renders meaningful content - About Honey", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutHoneyScreen />
      </ThemeProvider>
    )
    const content = screen.getAllByText(/honey/i)
    expect(content.length).toBeGreaterThan(2)
  })
})

// About Us
describe("About Us Screen", () => {
  it("renders single h1 - About Us", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutUsScreen />
      </ThemeProvider>
    )
    const header = screen.getByRole("heading")
    expect(header).toBeInTheDocument()
  })

  it("renders images - About Us", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutUsScreen />
      </ThemeProvider>
    )
    const imgs = screen.getAllByRole("img")
    expect(imgs.length).toBeGreaterThan(0)
  })

  it("renders meaningful content - About Us", () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutUsScreen />
      </ThemeProvider>
    )
    const content = screen.getAllByText(/honey/i)
    expect(content.length).toBeGreaterThan(2)
  })
})

// Contact
describe("Contact Screen", () => {
  it("renders single h1 - Contact", () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ContactScreen />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const header = screen.getByRole("heading")
    expect(header).toBeInTheDocument()
  })

  it("renders contact form - Contact", () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ContactScreen />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const inputs = screen.getAllByRole("textbox")
    expect(inputs.length).toBe(3)
  })

  it("renders submit button - Contact", () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ContactScreen />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument()
  })

  it("renders meaningful content - Contact", () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <ContactScreen />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    const content = screen.getByText(/gd top/i)
    expect(content).toBeInTheDocument()
  })
})

// General Conditions
describe("General Conditions Screen", () => {
  it("renders multiple headings - General Conditions", () => {
    render(
      <ThemeProvider theme={theme}>
        <GeneralConditionsScreen />
      </ThemeProvider>
    )
    const heads = screen.getAllByRole("heading")
    expect(heads.length).toBeGreaterThan(10)
  })

  it("renders meaningful content - General Conditions", () => {
    render(
      <ThemeProvider theme={theme}>
        <GeneralConditionsScreen />
      </ThemeProvider>
    )
    const content = screen.getAllByText(/customer/i)
    expect(content.length).toBeGreaterThan(5)
  })
})

// Info Payment
describe("Info Payment Screen", () => {
  it("renders multiple headings - Info Payment", () => {
    render(
      <ThemeProvider theme={theme}>
        <InfoPaymentScreen />
      </ThemeProvider>
    )
    const hs = screen.getAllByRole("heading")
    expect(hs.length).toBeGreaterThan(3)
  })

  it("renders meaningful content - Info Payment", () => {
    render(
      <ThemeProvider theme={theme}>
        <InfoPaymentScreen />
      </ThemeProvider>
    )
    const content = screen.getAllByText(/pay/i)
    expect(content.length).toBeGreaterThan(3)
  })
})

// Info Shipping
describe("Info Shipping Screen", () => {
  it("renders multiple headings - Info Shipping", () => {
    render(
      <ThemeProvider theme={theme}>
        <InfoShippingScreen />
      </ThemeProvider>
    )
    const hs = screen.getAllByRole("heading")
    expect(hs.length).toBe(3)
  })

  it("renders meaningful content - Info Shipping", () => {
    render(
      <ThemeProvider theme={theme}>
        <InfoShippingScreen />
      </ThemeProvider>
    )
    const content = screen.getAllByText(/return/i)
    expect(content.length).toBeGreaterThan(3)
  })
})
