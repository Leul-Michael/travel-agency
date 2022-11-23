import React from "react"

const MainCard = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="/imgs/card-img.jpg" alt="" />
      </div>
      <p>Trip to Greece</p>
      <p className="date">14-29 June by Robbin joseph</p>
      <div className="card__icons">
        <img src="/svgs/LEAF.svg" alt="" />
        <img src="/svgs/map icon.svg" alt="" />
        <img src="/svgs/map icon.svg" alt="" />
      </div>
      <p className="date">24 people going</p>
    </div>
  )
}

export default MainCard
