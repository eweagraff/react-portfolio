const Projects = () => {
  return (
    <section className="projects">
      <tr>
        <div classNme="row">
          <div class="column">
            <h3>Parks & Trek</h3>

            <a href="https://boiling-wildwood-93515.herokuapp.com">
              <img
                src="./assets/images/Parks&Trek.png"
                alt="Feel"
                width="575"
                height="400"
              />
            </a>
            <span className="caption">
              Parks & Trek is a full stack web application that allows a user to
              sign up or login and search National Parks based on states, which
              then allows them to save the park to a wishlist and view it on a
              map.
            </span>
          </div>
        </div>
      </tr>
      <tr>
        <div class="row">
          <div class="column">
            <h3>Find Eat Enjoy Love</h3>
            <a href="https://vasylynash.github.io/FEEL/">
              <img
                src="./assets/images/landingPage1.png"
                alt="Feel"
                width="575"
                height="400"
              />
            </a>
            <span classNme="caption">
              F.E.E.L is a food-based app that allows users to search for
              recipes and also displays videos from YouTube demonstrating how to
              make these recipes.
            </span>
          </div>
        </div>
      </tr>
      <div class="row">
        <div class="column">
          <h3> Weather App </h3>
          <a href="https://eweagraff.github.io/vanilla-weather-app/">
            <img
              src="./assets/images/weather_app.png"
              alt="weather"
              width="575"
              height="400"
            />
          </a>
          <tr>
            <span classNme="caption">
              The weather app is a front-end web application that allows a user
              to search any city in the world for a current weather report.
            </span>
            <h3> Thailad Quiz </h3>
            <a href="https://eweagraff.github.io/Thailand_Quiz/">
              <img
                src="./assets/images/Thailandquizscreenshot.png"
                alt="quiz"
                width="575"
                height="400"
              />
            </a>
          </tr>
          
          <tr>
          <span className="caption">
            Test your knowledge on one of the best countries in the world!
            </span>
            <h3> TripScav </h3>
            <a href="http://etripscav.herokuapp.com/">
              <img
                src="./assets/images/tripscav.png"
                alt="tripscav"
                width="575"
                height="400"
              />
            </a>
            <span classNme="caption">
              TripScav is a travel-based full stack application that allows a
              user to sign up/login to search travel destinations and their main
              sights.
            </span>
          </tr>
        </div>
      </div>
    </section>
  );
};

export default Projects;
