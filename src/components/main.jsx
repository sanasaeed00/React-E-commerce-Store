import React from "react";
import './carousel.css';

const Home = () => {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">


        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "70vh"   }} >
            <div
              style={{
                backgroundColor:"#2145af",
                display: "flex",
                alignItems: "center",
                height: "100%",
                padding: "0 300px",
                justifyContent:"space-between"
              }}
            >
              <div
                style={{
                  color: "white",
                  textAlign: "left",
                 
                  paddingRight: "70px",
                }}
              >
                <h1 style={{fontSize:"180",fontWeight:"bolder"}}>Men's Fashion</h1>
                <p style={{fontSize:"180"}} >Explore the latest trends in men's clothing and accessories.</p>
              </div>
              <img
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "50%", // Adjust this based on image size
                  
                }}
                src="./assets/men_pic.jpg"
                alt="Men's Fashion"
              />
            </div>
          </div>
          <div className="carousel-item" style={{ height: "70vh" }}  >
          <div
              style={{
                backgroundColor:"#0a2866",
                display: "flex",
                alignItems: "center",
                height: "100%",
                padding: "0 300px",
                justifyContent:"space-between"
              }}
            >
              <div
                style={{
                  color: "white",
                  textAlign: "left",
                 
                  paddingRight: "70px",
                }}
              >
                <h1 style={{fontSize:"180",fontWeight:"bolder"}} >Women's Fashion</h1>
                <p style={{fontSize:"180"}} >Discover the latest in women's fashion and accessories.</p>
              </div>
              <img
                src="./assets/women_pic.jpg"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "60%", // Adjust this based on image size
                }}
                alt="Women's Fashion"
              />
            </div>
          </div>
          <div className="carousel-item" style={{ height: "70vh" }}>
          <div
              style={{
                backgroundColor:"#262729",
                display: "flex",
                alignItems: "center",
                height: "100%",
                padding: "0 300px",
                justifyContent:"space-between"
              }}
            >
              <div
                style={{
                  color: "white",
                  textAlign: "left",
                 
                  paddingRight: "70px",
                }}
              >
                <h1 style={{fontSize:"180",fontWeight:"bolder"}} >Jewelry</h1>
                <p style={{fontSize:"180"}} >Find the perfect piece of jewelry for every occasion.</p>
              </div>
              <img
                src="./assets/jewellery.jpg"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "60%", // Adjust this based on image size
                }}
                alt="Jewellery"
              />
            </div>
          </div>
          <div className="carousel-item" style={{ height: "70vh" }}>
          <div
              style={{
                backgroundColor:"#522f7c",
                display: "flex",
                alignItems: "center",
                height: "100%",
                padding: "0 300px",
                justifyContent:"space-between"
              }}
            >
              <div
                style={{
                  color: "white",
                  textAlign: "left",
                 
                  paddingRight: "70px",
                }}
              >
                <h1 style={{fontSize:"180",fontWeight:"bolder"}} >Home Appliances</h1>
                <p style={{fontSize:"180"}}>Upgrade your home with the latest appliances.</p>
              </div>
              <img
                src="./assets/crousal4.jpg"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "50%", // Adjust this based on image size
                }}
                alt="Appliances"
              />
            </div>
          </div>
        </div>
        <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
    </>
  );
};

export default Home;
