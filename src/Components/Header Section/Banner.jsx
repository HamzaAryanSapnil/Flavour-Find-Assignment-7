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
            Welcome to FlavorFind: Your Culinary Journey Starts Here!
Explore handcrafted cooking experiences designed just for you.
Indulge in the joy of creating exquisite dishes from scratch, guided by expert chefs.
Savor the satisfaction of mastering new recipes that tantalize the taste buds and nourish the soul.
Join us on a flavorful adventure where every dish tells a story and every meal is a masterpiece.
Begin your culinary exploration today with FlavorFind!

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
