import "./booking.css"
import BookingExcerpt from "./BookingExcerpt"
import FloatCard from "./FloatCard"
import MainCard from "./MainCard"

const BOKING_VALS = [
  {
    imgUrl: "/svgs/choose.svg",
    color: "#F0BB1F",
    title: "Choose Destination",
  },
  {
    imgUrl: "/svgs/make.svg",
    color: "#F15A2B",
    title: "Make Payment",
  },
  {
    imgUrl: "/svgs/reach.svg",
    color: "#006380",
    title: "Reach Airport on Selected Date",
  },
]

const Booking = () => {
  return (
    <section className="booking">
      <div className="booking__flex container">
        <div className="booking__flex-content">
          <p className="page-title">Easy and Fast</p>
          <h2 className="heading-sm">Book your next trip in 3 easy steps</h2>
          {BOKING_VALS.map((val) => (
            <BookingExcerpt
              key={val.imgUrl}
              imgUrl={val.imgUrl}
              title={val.title}
              color={val.color}
            />
          ))}
        </div>
        <div className="booking__flex-card">
          <MainCard />
          <FloatCard />
        </div>
      </div>
    </section>
  )
}

export default Booking
