import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'jgjake2.com',
    href: 'https://jgjake2.com',
  },
  {
    social: 'email',
    link: 'jgjake22@gmail.com',
    href: 'mailto:jgjake22@gmail.com',
  },
  {
    social: 'github',
    link: 'jgjake2',
    href: 'https://github.com/jgjake2',
  },
  {
    social: 'linkedin',
    link: 'eric-a-gardner',
    href: 'https://www.linkedin.com/in/eric-a-gardner/',
  },
  {
    social: 'resume',
    link: 'eric-resume.pdf',
    href: '#',
  },
  {
    social: 'phone',
    link: 'eric-a-gardner',
    href: 'https://www.linkedin.com/in/eric-a-gardner/',
    guard: true
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
              {item.guard ?
                (<span className={`${styles.guard} ${styles.reverse}`} data-first-guard="&#34;8571-202 " data-second-guard="(379)&#34;"></span> ) : 
                (<a href={item.href} target="_blank" rel="noopener">{item.link}</a>)
              }
              {index < (contactItems.length - 1) ? <>,</> : <></>}
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
