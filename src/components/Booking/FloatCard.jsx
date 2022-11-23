import React from "react"

const FloatCard = () => {
  return (
    <div className="float-card">
      <div className="card-img">
        <img src="/imgs/Mask Group.png" alt="" />
      </div>
      <div className="card-content">
        <p className="date">Ongoing</p>
        <p className=".page-title">Trip to rome</p>
        <div className="meter-box">
          <label htmlFor="travel">
            <span>40%</span>completed
          </label>
          <meter
            id="travel"
            min={0}
            max={100}
            low={30}
            high={60}
            optimum={90}
            value={40}
          ></meter>
        </div>
      </div>
    </div>
  )
}

export default FloatCard
