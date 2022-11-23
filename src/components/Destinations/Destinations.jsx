import "./destination.css"
import Destination from "./Destination"

const DESTINATION_POINTS = [
  {
    imgUrl: "/imgs/Rome.png",
    views: "$5,42 k",
    location: "Rome, Italy",
    duration: "10 days trip",
  },
  {
    imgUrl: "/imgs/France.jpg",
    views: "$4.2 k",
    location: "London, UK",
    duration: "12 days trip",
  },
  {
    imgUrl: "/imgs/russ.png",
    views: "$15 k",
    location: "Full Europe",
    duration: "20 days trip",
  },
]

const Destinations = () => {
  return (
    <section className="destinations">
      <div className="container destinations-container">
        <p className="page-title">Top Selling</p>
        <h2 className="heading-sm">Top Destinations</h2>
        <div className="destinations-grid">
          {DESTINATION_POINTS.map((dest) => (
            <Destination
              key={dest.imgUrl}
              imgUrl={dest.imgUrl}
              views={dest.views}
              location={dest.location}
              duration={dest.duration}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
