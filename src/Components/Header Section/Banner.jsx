const Banner = () => {
  return (
    <div className="p-4">
      <div
        className="hero md:h-[70vh] rounded-3xl "
        style={{
          backgroundImage: "url(https://i.postimg.cc/wxRjkMq1/food-items.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 md:text-5xl text-3xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-nav-icon-bg mx-4 rounded-full text-lg md:text-xl font-bold text-navBlack border-none ">
              Explore Now
            </button>
            <button className="btn bg-transparent text-white font-semibold  text-lg md:text-xl rounded-full mt-2 ">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
