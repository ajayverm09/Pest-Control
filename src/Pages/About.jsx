// src/pages/About.jsx
import React from "react";
import AboutJourney from "../Components/AboutJourney";
import AboutTeam from "../Components/AboutTeam";
import HomeHero2 from "../Components/HomeHero2";
import AboutHeroRe from "../Components/AboutHeroRe";
import AboutRange from "../Components/AboutRange";
import AboutPurpose from "../Components/AboutPurpose";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <AboutHeroRe
          header="ABOUT US"
          url="https://images.pexels.com/photos/9280745/pexels-photo-9280745.jpeg"
          btntext="More About"
          btntext2="Watch Video"
          main="Home"
          texter="About"
          text="Eget lacinia nisl sit urna. Arcu arcu molestie metus tellus dui at vel odio massa. Facilisi aliquam pulvinar aliquet cursus pellentesque vestibulum. Vitae nec tortor non potenti in."
        />
      </section>

      {/* Other Sections */}
      <section className="w-full">
        <HomeHero2 />
      </section>

      <section className="w-full">
        <AboutJourney />
      </section>

      <section className="w-full">
        <AboutPurpose />
      </section>

      <section className="w-full">
        <AboutRange />
      </section>

      <section className="w-full">
        <AboutTeam />
      </section>
    </div>
  );
};

export default About;
