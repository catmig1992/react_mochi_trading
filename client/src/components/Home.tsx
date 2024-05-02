import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <section>
        <h1 className="section-title">Top Sellers</h1>
        <div className="default-img">
          <img
            src="./images/pexels-cottonbro-studio-6144294-small.jpg"
            alt="slime"
          />
          <p>Slime</p>
        </div>
      </section>
      <section>
        <h1 className="section-title">New Items</h1>
        <div className="default-img">
          <img
            src="./images/pexels-monstera-production-7139457-small.jpg"
            alt="princess star wand"
          />
          <p>Children's Costumes</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
