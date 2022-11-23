import React from "react"

const Destination = ({ imgUrl, views, location, duration }) => {
  return (
    <article
      className="destination"
      style={{
        background: `url(${imgUrl}) no-repeat center center / cover`,
      }}
    >
      <div className="destination__detail">
        <div className="top">
          <p>{location}</p>
          <p>{views}</p>
        </div>
        <div className="navigation">
          <img src="/svgs/navigation.svg" alt="" />
          <p>{duration}</p>
        </div>
      </div>
    </article>
  )
}

export default Destination
