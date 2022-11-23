import "./App.css"
import Booking from "./components/Booking/Booking"
import Clients from "./components/Clients/Clients"
import Destinations from "./components/Destinations/Destinations"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Subscription from "./components/Subscription/Subscription"
import Testimonials from "./components/Testimonials/Testimonials"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Booking />
      <Testimonials />
      <Clients />
      <Subscription />
      <Footer />
    </>
  )
}

export default App
