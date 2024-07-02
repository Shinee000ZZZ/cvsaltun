import styles from './hero.module.css';
import { useEffect } from "react";
import { getImageUrl } from '../../utils';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const imageUrl = getImageUrl('hero/saltun-hero.png'); // Menggunakan jalur yang benar

  useEffect(() => {
    AOS.init({ duration: 2000,
      once: true

    });
  }, []);

  return (
    <div className={styles.heroContainer} id='home'>
      <div className={styles.heroText} data-aos="fade-right" data-aos-delay="200" >
        <h1>Hi! I am Sultan</h1>
        <p>This is My Online CV.</p>
      </div>
      <div className={styles.heroImage} data-aos="fade-left" data-aos-delay="200">
        <img src={imageUrl} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
