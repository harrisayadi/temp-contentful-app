import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            similique accusamus debitis nostrum molestiae ratione nobis.
            Incidunt necessitatibus earum doloribus atque nesciunt! Dignissimos
            laboriosam assumenda odio reprehenderit dolorum eligendi earum
            incidunt nemo, pariatur aliquid porro laborum? Distinctio aliquam
            modi odit!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
