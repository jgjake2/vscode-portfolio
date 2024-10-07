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
  
/*
        <h3 className={styles.heading2}>See My References</h3>
        <p className={styles.references_body}>
            <div className={styles.foo}>
                <a className={styles.referenceLink} href="https://drive.google.com/file/d/1LJjyVOTvH-pjE5MGPbppUQ19NFx_jFia/view?usp=share_link">
                    <span className={styles["icon-pdf-container"]}>
                        <Image src="/logos/file-pdf-alt.svg" alt="Link To PDF" height={16} width={16} className={styles["icon-pdf"]} />
                    </span>
                    Letter of Recommendation
                    <span className={styles["icon-arrow-container"]}>
                        <Image src="/arrow-up-right-from-square.svg" alt="Link To PDF" height={15} width={15} className={styles["icon-arrow"]} />
                    </span>
                </a>
            </div>
        </p>
*/
    
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
        <h3 className={styles.heading}>Experience & Certifications</h3>
        <div className={styles.certContainer} onMouseMove={handleMouseMove}>
            <CertInfo options={{
              title: "SMS Infocomm – Lead Nvidia Enterprise Server Technician & Technical Instructor",
              titleLink: "https://www.smsinfocomm.com/",
              subtitle: "2023 - Present",
              icon: "/nvidia-sms-logo-combined-color.png",
              iconLink: "https://www.smsinfocomm.com/",
              description: "Troubleshoot, repair and refurbish Nvidia DGX A100 & H100 SXM units. Train new technicians to work on these units over the course of a month.",
              size: 125
            }} />
            <CertInfo options={{
              title: "SMU Cybersecurity Assistant Instructor",
              titleLink: "https://techbootcamps.smu.edu/cybersecurity/",
              subtitle: "November 2022 - December 2023",
              icon: "/SMU_logo.png",
              iconLink: "https://techbootcamps.smu.edu/cybersecurity/",
              description: "Hired on as an assistant instructor for SMU's Cybersecurity course.",
              size: 125
            }} />
            <CertInfo options={{
              title: "CompTIA Security+",
              titleLink: "https://www.comptia.org/certifications/security",
              subtitle: "Completed February 2023",
              sublink: "https://www.credly.com/badges/ccaffa11-c24e-47a6-a73c-1ca5ff20a975/public_url",
              icon: "/comptia_secplus.svg",
              iconLink: "https://www.credly.com/badges/ccaffa11-c24e-47a6-a73c-1ca5ff20a975/public_url",
              description: { __html: "Cybersecurity certification that validates a person's aptitude for assessing attacks, threats and vulnerabilities in the the IT space.<br />I passed the CompTIA Security+ exam February 19, 2023. " },
              size: 125
            }} />
            <CertInfo options={{
              title: "AWS Cloud Practitioner",
              titleLink: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
              subtitle: "Completed December 2022",
              sublink: "https://www.credly.com/badges/d02765d3-ce54-4f79-9dd9-ffd05be144d3/public_url",
              icon: "/AWS-certified-practitioner.svg",
              iconLink: "https://www.credly.com/badges/d02765d3-ce54-4f79-9dd9-ffd05be144d3/public_url",
              description: { __html: "A certification intended for individuals with knowledge of core AWS services and use cases, billing and pricing models, and security concepts.<br />I passed the AWS Cloud Practitioner exam on December 12, 2022." },
              size: 125
            }} />
            <CertInfo options={{
              title: "SMU Cybersecurity Boot Camp",
              titleLink: "https://techbootcamps.smu.edu/cybersecurity/",
              subtitle: "Completed September 2022",
              sublink: "https://www.credly.com/badges/984f649f-047a-4d21-aee4-ecf2598fc13d/public_url",
              icon: "/CAPE_CybersecurityBootCamap_Badge.png",
              iconLink: "https://www.credly.com/badges/984f649f-047a-4d21-aee4-ecf2598fc13d/public_url",
              description: "A 24 week cybersecurity bootcamp that taught the fundamentals of defensive and offensive cybersecurity.",
              size: 125
            }} />
            <CertInfo options={{
              title: "AWS Cloud Apprenticeship",
              titleLink: "https://newapprenticeship.com/apprenticeships/aws-cloud-apprenticeship/",
              subtitle: "in progress 2023",
              icon: "/newapprenticeship_logo_small_wide.png",
              iconLink: "https://newapprenticeship.com/apprenticeships/aws-cloud-apprenticeship/",
              description: { __html: "An apprenticeship program that allows participants to get real-world experience and earn certifications while working with a partnered company.<br />I am currently in the program waiting for an apprenticeship position to open up." },
              size: 125
            }} />
            <CertInfo options={{
              title: "Microsoft Office Specialist: Access",
              titleLink: "https://learn.microsoft.com/en-us/certifications/mos-access-2013/",
              subtitle: "Microsoft",
              icon: "/MOS_Access.png",
              iconLink: "https://www.credly.com/badges/a5f71db9-f2a3-4ba7-9526-f39b2def92a2/public_url",
              description: "Microsoft Access Specialist: can create and maintain basic Access database objects including tables, relationships, data entry forms, multi-level reports, and multi-table queries.",
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
