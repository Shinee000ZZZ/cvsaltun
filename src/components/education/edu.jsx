import styles from './edu.module.css';
import { getImageUrl } from '../../utils';
import "aos/dist/aos.css";

const educationData = [
    {
        image: 'sdsd.png',
        year: '2013 - 2019',
        schoolName: 'UPTD SDN Sinartanjung',
        description: 'Menyelesaikan pendidikan dasar di UPTD SDN Sinartanjung.',
        aosAnimation: 'fade-right' // Animasi untuk SD
    },
    {
        image: 'mts.png',
        year: '2019 - 2022',
        schoolName: 'MTsN 1 Banjar',
        description: 'Menyelesaikan pendidikan menengah pertama di MTsN 1 Banjar.',
        aosAnimation: 'fade-down' // Animasi untuk MTs
    },
    {
        image: 'smk.png',
        year: '2022 - Current',
        schoolName: 'SMKN 1 Banjar',
        description: 'Sedang belajar di SMKN 1 Banjar, jurusan Rekayasa Perangkat Lunak.',
        aosAnimation: 'fade-left' // Animasi untuk SMK
    }
];

const Edu = () => {
    return (
        <div className={styles.eduContainer} id='edu'>
            <h1 className={styles.title} data-aos="fade-down" data-aos-delay="200">Education</h1>
            <div className={styles.cardsContainer}>
                {educationData.map((edu, index) => (
                    <div 
                        key={index} 
                        className={`${styles.eduCard} ${styles[edu.aosAnimation]}`} 
                        data-aos={edu.aosAnimation} 
                        data-aos-delay={`${index * 200}`}
                    >
                        <img src={getImageUrl(`education/${edu.image}`)} alt={edu.schoolName} className={styles.eduImage} />
                        <h3 className={styles.schoolName}>{edu.schoolName}</h3>
                        <p className={styles.year}>{edu.year}</p>
                        <p className={styles.description}>{edu.description}</p>        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Edu;
