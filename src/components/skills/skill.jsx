import { useEffect, useRef, useState } from 'react';
import styles from './skill.module.css';

const skillsData = [
  { name: 'HTML', level: '88%' },
  { name: 'CSS', level: '80%' },
  { name: 'JavaScript', level: '75%' },
  { name: 'PHP', level: '70%' },
  { name: 'React', level: '75%' },
  { name: 'Bootstrap', level: '80%' }
];

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.7 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.skillContainer} id="skills" ref={skillRef}>
      <h1 className={styles.title}>Skills</h1>
      {skillsData.map((skill, index) => (
        <div key={index} className={styles.skillBar}>
          <div className={styles.skillInfo}>
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </div>
          <div className={styles.skillProgress}>
            <div
              className={`${styles.skillLevel} ${isVisible ? styles.skillLevelVisible : styles.skillLevelHidden}`}
              style={{ width: isVisible ? skill.level : '0%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
