import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
    
  const handleMouseMove = (e) => {
      var target = e.target;
      while(target && target.parentElement && target.parentElement.tagName != "MAIN"){
          target = target.parentElement;
      }
      if(!target || !target.parentElement || target.parentElement.tagName != "MAIN") return;
    
      for(const card of target.children) {
          const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
      };
      
  };

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container} onMouseMove={handleMouseMove}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
