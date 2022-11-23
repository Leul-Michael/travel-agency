import "./services.css"

const Services = () => {
  return (
    <section className="services">
      <div className="container services-container">
        <p className="page-title">CATEGORY</p>
        <h2 className="heading-sm">We Offer Best Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-card__img">
              <img src="/imgs/satellite.png" alt="" />
            </div>
            <h4 className="tx-heading">Calculated Weather </h4>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className="service-card">
            <div className="service-card__img">
              <img src="/imgs/flight.png" alt="" />
            </div>
            <h4 className="tx-heading">Best Flights</h4>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className="service-card">
            <div className="service-card__img">
              <img src="/imgs/disco.png" alt="" />
            </div>
            <h4 className="tx-heading">Local Events</h4>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.{" "}
            </p>
          </div>
          <div className="service-card">
            <div className="service-card__img">
              <img src="/imgs/setting.png" alt="" />
            </div>
            <h4 className="tx-heading">Customization</h4>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
