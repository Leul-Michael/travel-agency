import "./testimonials.css"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

const Testimonials = () => {
  return (
    <section className="testimonial">
      <div className="container testimonial-container">
        <div className="testimonial__description">
          <p className="page-title">Testimonials</p>
          <h2 className="heading-sm">What people say about Us.</h2>
          <div className="testimonial__bullets">
            <button className="btn btn-points active"></button>
            <button className="btn btn-points"></button>
            <button className="btn btn-points"></button>
          </div>
        </div>
        <div className="testimonial__cards">
          <div className="testimonial__card active">
            <img src="/imgs/user.png" className="float-img" alt="" />
            <p className="comment">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h5>Mike taylor</h5>
            <p className="name">Lahore, Pakistan</p>
          </div>
          <div className="testimonial__card second">
            <img src="/imgs/user.png" className="float-img" alt="" />
            <p className="comment">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h5>Mike taylor</h5>
            <p className="name">Lahore, Pakistan</p>
          </div>
          <div className="testimonial__card-buttons">
            <button className="btn btn-carousel">
              <MdKeyboardArrowUp />
            </button>
            <button className="btn btn-carousel">
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
