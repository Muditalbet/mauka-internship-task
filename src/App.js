import './App.css';


function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="navbar">
          <div className="logo-navbar">
            <img src={require('./images/Group 220.png').default} alt="logo"></img>
            <div className="logo-navbar-name">organic</div>
          </div>
          <div className="buttons-navbar">
            <a href="/" style={{borderBottom: "solid 2px #00dbd0"}}>Home</a>
            <a href="/">Products</a>
            <a href="/">Blog</a>
            <a href="/">About Us</a>
            <button>Contact</button>
            
          </div>
        </div>
        <div className="content">
          <div className="content-left">
            <h2>Healthy life with</h2>
            <h1>Nature Organic</h1>
            <p>Vegetables are the edible parts of a plant that is used in cooking or can be eaten now.</p>
            <button>Explore Now</button>
          </div>
          <div className="content-right">
            <div className="background-look-image">
              <img src={require('./images/Group 228.png').default} alt="look" />
            </div>
            <div className="front-look-image">
              <img src={require('./images/Group 195.png').default} alt="look front" />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-title">
          <img src={require("./images/Group 114.png").default} alt="leaf" />
          <h1>Welcome to Nature</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="about-content">
          <img src={require("./images/Group 207.png").default} alt="content" />
          <img src={require("./images/Group 205.png").default} alt="content" />
          <img src={require("./images/Group 207.png").default} alt="content" />
          <img src={require("./images/Group 207.png").default} alt="content" />
        </div>
      </div>
      <div className="client">
        <div className="client-title">
          <h1>Proudly presented by</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="client-content">
          <div className="client-content-main">
            <img src={require("./images/Group 39.png").default} alt="client" />
            <img src={require("./images/Group 64.png").default} alt="client" />
            <img src={require("./images/Group 55.png").default} alt="client" />
            <img src={require("./images/Group 64.png").default} alt="client" />
            <img src={require("./images/Group 39.png").default} alt="client" />
          </div>
          <div className="client-content-scroll">
            <div className="content-circle"></div>
            <div className="content-circle-unique"></div>
            <div className="content-circle"></div>
            <div className="content-circle"></div>
          </div>
        </div>
      </div>
      <div className="feedback">
        <div className="feedback-profile">
          <img className="double-quotes" src={require("./images/Group 86.png").default} alt="Double quotes" />
          <div className="profile-image"></div>
          <h3>Jane Doe</h3>
          <div className="rating">
            <img src={require("./images/favourite-star.svg").default} alt="Stars" />
            <img src={require("./images/favourite-star.svg").default} alt="Stars" />
            <img src={require("./images/favourite-star.svg").default} alt="Stars" />
            <img src={require("./images/favourite-star.svg").default} alt="Stars" />
            <img src={require("./images/favourite-star.svg").default} alt="Stars" />
          </div>
        </div>
        <div className="feedback-content">
          <p>Thank you for all the amazing produce and products you deliver each week…<br/>you make my life so easy an bring goodness into our family eating.<br/>I’ve been roasting a lot of brussel sprouts and</p>
        </div>
        <div className="feedback-circles">
          <div className="feedback-circle-unique"></div>
          <div className="feedback-circle"></div>
          <div className="feedback-circle"></div>
          <div className="feedback-circle"></div>
        </div>
        <div className="side-style-image">
          <img src={require("./images/Group 134.png").default} alt="" />
        </div>
      </div>
      <div className="subscribe">
        <div className="subscribe-content">
          <h1>Subscribe to Our Newsletter</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="subscribe-form">
          <div className="subscribe-form-input">Enter your email address</div>
          <div className="subscribe-form-button">Subscribe</div>
        </div>
      </div>
      <div className="blogs">
        <div className="blogs-title">
          <img src={require("./images/Group 114.png").default} alt="leaf" />
          <h1>Read Our Blog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="blogs-content">
          <div className="blog-card">
            <div className="blog-card-image"></div>
            <h4>Blog Post One</h4>
            <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed<br/>do eiusmod.</p>
            <span>Read More</span>
            <div className="blog-card-underline"></div>
          </div>
          <div className="blog-card">
            <div className="blog-card-image"></div>
            <h4>Blog Post One</h4>
            <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed<br/>do eiusmod.</p>
            <span>Read More</span>
            <div className="blog-card-underline"></div>
          </div>
          <div className="blog-card">
            <div className="blog-card-image"></div>
            <h4>Blog Post One</h4>
            <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed<br/>do eiusmod.</p>
            <span>Read More</span>
            <div className="blog-card-underline"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
