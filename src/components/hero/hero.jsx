import styles from './hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  const imageUrl = getImageUrl('hero/saltun-hero.png'); // Menggunakan jalur yang benar

  return (
    <div className={styles.heroContainer} id='home'>
      <div className={styles.heroText}>
        <h1>Hi! I am Sultan</h1>
        <p>This is My Online CV.</p>
      </div>
      <div className={styles.heroImage}>
        <img src={imageUrl} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
