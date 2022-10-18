import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
    
  function onLoad(e){
      var gyroHDEditor = document.querySelector('img[src*="gyrohd3editor"]');
      if(gyroHDEditor){
          //gyroHDEditor.style.margin = '0px';
          gyroHDEditor.style.padding = '1rem';
      }
        
      var starWarsImage = document.querySelector('img[src*="SWUP_Logo"]');
      if(starWarsImage){
          starWarsImage.style.padding = '2rem';
      }
        
      var steamProfile = document.querySelector('img[src*="steam.jpg"]');
      if(steamProfile){
          steamProfile.style.padding = '1rem';
      }
  }
    
  function cleanTagName(text){
      return text.toLowerCase().replace(/\#/i, 'sharp').replace(/[^a-zA-Z0-9\-]+/i, '');
  }
  
  var imageStyle = {margin: '0px'};
  return (
    <div className={styles.card}>
        <div className={styles.cardContent}>
          <Image src={project.image} height={300} width={600} alt={project.name} objectFit="contain" className={styles.thumbnail} style={{...imageStyle, ...(project.imageStyle || {})}} onLoad={onLoad} />
          <div className={styles.content}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={cleanTagName(tag)}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.cta}>
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  Source Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  Live Demo
                </a>
              )}
              {project.view && (
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;
