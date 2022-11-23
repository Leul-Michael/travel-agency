import "./subscription.css"
import { HiOutlineMail } from "react-icons/hi"

const Subscription = () => {
  return (
    <section className="subscription">
      <div className="container">
        <div className="subs-container">
          <div className="float-msg">
            <img src="/svgs/msg.svg" alt="" />
          </div>
          <h4>
            Subscribe to get information, latest news and other intersting
            offers about Cobham
          </h4>
          <form>
            <div className="input-box">
              <HiOutlineMail className="icon" />
              <input type="text" placeholder="Your Email" name="email" />
            </div>
            <button type="submit" className="btn btn-cta">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscription
