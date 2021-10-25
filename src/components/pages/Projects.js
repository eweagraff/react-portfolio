const Projects = () => {
  return (
    <section className="projects">
      <div class="row">
        <div class="column">
          <h3>Find Eat Enjoy Love</h3>
          <a href="https://vasylynash.github.io/FEEL/">
            <img
              src="./assets/images/landingPage1.png"
              alt="Feel"
              width="400"
              height="400"
            />
          </a>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <h3> Weather App </h3>
          <a href="https://eweagraff.github.io/vanilla-weather-app/">
            <img
              src="./assets/images/weather_app.png"
              alt="weather"
              width="300"
              height="200"
            />
          </a>
          <h3> Thailad Quiz </h3>
          <a href="https://eweagraff.github.io/Thailand_Quiz/">
            <img
              src="./assets/images/Thailandquizscreenshot.png"
              alt="quiz"
              width="300"
              height="200"
            />
          </a>
          <h3> TripScav </h3>
          <a href="http://etripscav.herokuapp.com/">
            <img
              src="./assets/images/tripscav.png"
              alt="tripscav"
              width="300"
              height="200"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
