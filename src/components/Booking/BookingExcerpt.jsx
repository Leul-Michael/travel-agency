import React from "react"

const BookingExcerpt = ({ color, imgUrl, title }) => {
  return (
    <article className="booking-excerpt">
      <div className="booking-excerpt__icon" style={{ background: color }}>
        <img src={imgUrl} alt="" />
      </div>
      <div className="booking-excerpt__text">
        <h5>{title}</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.{" "}
        </p>
      </div>
    </article>
  )
}

export default BookingExcerpt
