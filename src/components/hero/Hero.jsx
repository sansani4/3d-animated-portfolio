import "./hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hSection left">
        <h1 className="hTitle">
          Hey there,
          <br />
          <span>I am Sasha!</span>
        </h1>
        <div className="awards">
          <h2>Top Rated Designer</h2>
          <p>I think it is great that you can benefit from my services!</p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>
        <a href="#services">
          <svg height="150" width="500" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="240" cy="100" rx="220" ry="30" fill="purple" />
            <ellipse cx="220" cy="70" rx="190" ry="20" fill="lime" />
            <ellipse cx="210" cy="45" rx="170" ry="15" fill="yellow" />
          </svg>
        </a>
      </div>
      <div className="hSectionRight">
        <div className="follow">
          <a href="/">
            <img src="/instagram.png" alt="" />
            <img src="/facebook.png" alt="" />
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero