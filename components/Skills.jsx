import Image from 'next/image';
import styles from '../styles/Skills.module.css';

const Skills = ({ options }) => {
  return (
    <div className={styles.container}>
      <Image src={options.icon} alt={options.name} height={50} width={50} className={styles[options.styleName]} />
      <div className={styles.info}>
        <div>
          <h3>{options.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
