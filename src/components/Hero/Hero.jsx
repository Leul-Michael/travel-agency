import "./hero.css"
import { BsFillPlayFill } from "react-icons/bs"

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__content container">
        <div className="hero__content-description">
          <p className="tagline">Best Destinations around the world</p>
          <h1 className="heading">
            Travel <span className="underlined">, enjoy</span> and live a new
            and full life
          </h1>
          <p className="desc">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="hero__content-btns">
            <button className="btn btn-cta">Find out more</button>
            <button className="btn btn-play">
              <span className="icon">
                <BsFillPlayFill />
              </span>{" "}
              Play demo
            </button>
          </div>
        </div>
        <div className="hero__content-img">
          <img src="/imgs/Traveller 1.png" alt="traveller" />
        </div>
      </div>
    </main>
  )
}

export default Hero
