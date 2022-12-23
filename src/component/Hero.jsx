import HeroImage from'../assets/images/bg-hero.jpg';


const Hero = () => {
    return <section class="hero" style={{backgroundImage: `url(${HeroImage})`}}>
    <h1 class="hero-title">
    FITNESS IS A <br />
    POWER
    </h1>

    <a href="#program" class="hero-btn-get-started">GET STARTED</a>
  </section>
}

export default Hero;

