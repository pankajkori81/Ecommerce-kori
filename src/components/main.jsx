import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid h-600"
            src="./assets/eweb.jpeg"
            alt="Card"
            height={200}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 bold text fw-lighter">Winter Season Special Offers</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              ecommerce website intractive summary
             An interactive e-commerce website aims to provide a dynamic and engaging shopping experience for users
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// import React from "react";
// import VideoPlayer from "./VideoPlayer";
// const products = [
//   { id: 1, name: "Product 1", price: 100 },
//   { id: 2, name: "Product 2", price: 200 },
// ];
// const Home = () => {
//   return (
//     <div className="flex flex-col items-center p-5">
//       {" "}
//       <h1 className="text-2xl font-bold mb-5"></h1>{" "}
//       <VideoPlayer products={products} />{" "}
//     </div>
//   );
// };
// export default Home;