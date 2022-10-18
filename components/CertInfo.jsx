import Image from 'next/image';
import styles from '../styles/CertInfo.module.css';

const CertInfo = ({ options }) => {

  return (
    <div className={`${styles.container} ${styles.card}`}>
      <div className={styles.cardContent}>
        {options.iconLink ?
          (<a href={options.iconLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink} ><Image src={options.icon} alt={options.title} height={options.size ? options.size : 100} width={options.size ? options.size : 100} className={styles.icon} /></a>)
          : (<Image src={options.icon} alt={options.title} height={options.size ? options.size : 100} width={options.size ? options.size : 100} className={styles.icon} />)}
        <div className={styles.info}>
          <div className={styles.head}>
            <h3 className={styles.title}>{options.titleLink ? (<a href={options.titleLink} target="_blank" rel="noopener noreferrer" className={styles.cardLink} >{options.title}</a>) : options.title}</h3>
            {options.subtitle && (<h5 className={styles.subtitle}>{options.sublink ? (<a href={options.sublink} target="_blank" rel="noopener noreferrer" className={styles.cardLink} >{options.subtitle}</a>) : options.subtitle}</h5>)}
          </div>
          <div className={styles.body}>
            {typeof options.description == "string" ? (<p>{options.description}</p>) : (<p dangerouslySetInnerHTML={options.description} ></p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertInfo;
