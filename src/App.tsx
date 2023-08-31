import React from "react";
import {
  Booking,
  Header,
  About,
  Features,
  Tours,
  Stories,
  Footer,
  Navigation,
  BookingModal,
} from "./components";

function App() {
  return (
    <>
      <BookingModal />
      <Navigation />
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
