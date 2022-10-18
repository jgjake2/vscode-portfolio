import Image from 'next/image';
import CertInfo from '../components/CertInfo';
import AllSkills from '../components/AllSkills';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
    
  const handleMouseMove = (e) => {
      var target = e.target;
      while(target && target.tagName != "MAIN"){
          target = target.parentElement;
      }
      if(!target || target.tagName != "MAIN") return;
      
      for(const card of target.querySelectorAll('div[class*="CertInfo_container"]')) {
          const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
      };
        
  };
    
  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <div className={styles.col1}>
        <h3 className={styles.heading}>A Little Bit About Me</h3>
        <span className={styles.profilePicContainer} >
            <Image src="/profile_pic_circle.png" height={175} width={175} className={styles.profilepic} />
        </span>
        <p className={styles.aboutme_body}>A passionate programmer since my early preteens, and a web developer since the dark ages of dial-up. Instead of going away to summer camp like a normal child, I went to programming camp like a proper nerd. I have embraced technology my entire life and have always wanted to be a professional programmer. I am highly self-motivated, enthusiastic and a problem solver. Like MacGyver with a keyboard, I always find a way to make things work with the resources I have available.</p>
      </div>
      <div className={styles.col2}>
        <h3 className={styles.heading}>Certifications</h3>
        <div className={styles.certContainer} onMouseMove={handleMouseMove}>
            <CertInfo options={{
              title: "Cybersecurity Boot Camp",
              titleLink: "https://techbootcamps.smu.edu/cybersecurity/",
              subtitle: "SMU",
              sublink: "https://www.smu.edu/",
              icon: "/CAPE_CybersecurityBootCamap_Badge.png",
              iconLink: "https://www.credly.com/badges/984f649f-047a-4d21-aee4-ecf2598fc13d",
              description: "A 24 week cybersecurity bootcamp that taught the fundamentals of defensive and offensive cybersecurity.",
              size: 125
            }} />
            <CertInfo options={{
              title: "Microsoft Office Specialist: Access",
              titleLink: "https://learn.microsoft.com/en-us/certifications/mos-access-2013/",
              subtitle: "Microsoft",
              icon: "/MOS_Access.png",
              iconLink: "https://www.credly.com/badges/a5f71db9-f2a3-4ba7-9526-f39b2def92a2",
              description: "Microsoft Access Specialist: can create and maintain basic Access database objects including tables, relationships, data entry forms, multi-level reports, and multi-table queries.",
              size: 125
            }} />
            <CertInfo options={{
              title: "CompTIA Security+",
              titleLink: "https://www.comptia.org/certifications/security",
              subtitle: "in progress 2022",
              icon: "/comptia_secplus.svg",
              iconLink: "https://www.comptia.org/certifications/security",
              description: { __html: "Cybersecurity certification that validates a person's aptitude for assessing attacks, threats and vulnerabilities in the the IT space.<br />I plan on taking the CompTIA Security+ exam before the end of 2022. " },
              size: 125
            }} />
            <CertInfo options={{
              title: "AWS Cloud Practitioner",
              titleLink: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
              subtitle: "in progress 2022",
              icon: "/AWS-certified-practitioner.svg",
              iconLink: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
              description: { __html: "A certification intended for individuals with knowledge of core AWS services and use cases, billing and pricing models, and security concepts.<br />I will be taking the AWS Cloud Practitioner exam as a part of my AWS Cloud Apprenticeship before the end of 2022." },
              size: 125
            }} />
            <CertInfo options={{
              title: "AWS Cloud Apprenticeship",
              titleLink: "https://newapprenticeship.com/apprenticeships/aws-cloud-apprenticeship/",
              subtitle: "in progress 2022",
              icon: "/newapprenticeship_logo_small_wide.png",
              iconLink: "https://newapprenticeship.com/apprenticeships/aws-cloud-apprenticeship/",
              description: { __html: "An apprenticeship program that allows participants to get real-world experience and earn certifications while working with a partnered company.<br />I am currently in the program working toward an <b>AWS Cloud Practitioner</b> certification." },
              size: 125
            }} />
        </div>
        
      </div>
      <div className={styles.col3}>
          <h3 className={styles.heading}>Skills</h3>
          <div className={styles.skillContainer}>
              <AllSkills />
          </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
