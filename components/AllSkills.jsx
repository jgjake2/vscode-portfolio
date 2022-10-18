import Skills from './Skills';

const skillItems = [
    {name: "HTML5",         rank: 2,        icon: "/logos/html5.svg",               styleName: "icon-html5"},
    {name: "CSS3",          rank: 2,        icon: "/logos/css3.svg",                styleName: "icon-css3"},
    {name: "Node.js",       rank: 5.1,      icon: "/logos/node-js.svg",             styleName: "icon-node"},
    {name: "Javascript",    rank: 5.1,      icon: "/logos/js.svg",                  styleName: "icon-js"},
    {name: "PHP",           rank: 5.1,      icon: "/logos/php.svg",                 styleName: "icon-php"},
    {name: "Python",        rank: 5.1,      icon: "/logos/python.svg",              styleName: "icon-python"},
    {name: "React",         rank: 4,        icon: "/logos/react.svg",               styleName: "icon-react"},
    {name: "Bootstrap",     rank: 0,        icon: "/logos/bootstrap.svg",           styleName: "icon-bootstrap"},
    {name: "AWS",           rank: 4.1,      icon: "/logos/aws.svg",                 styleName: "icon-aws"},
    {name: "Linux",         rank: 2,        icon: "/logos/linux.svg",               styleName: "icon-linux"},
    {name: "Kali",          rank: 4,        icon: "/kali_logo_solid.svg",           styleName: "icon-kali"},
    {name: "jQuery",        rank: 5.1,      icon: "/logos/jquery.svg",              styleName: "icon-jquery"},
    {name: "Nginx",         rank: 4,        icon: "/logos/nginx.svg",               styleName: "icon-nginx"},
    {name: "MySQL",         rank: 4,        icon: "/logos/mysql.svg",               styleName: "icon-mysql"},
    {name: "Access",        rank: 0,        icon: "/logos/microsoftaccess.svg",     styleName: "icon-access"},
    {name: "Apache",        rank: 0,        icon: "/logos/apache2.svg",             styleName: "icon-apache"},
    {name: "Lua",           rank: 0,        icon: "/logos/lua.svg",                 styleName: "icon-lua"},
    {name: "Azure",         rank: 4.1,      icon: "/logos/microsoftazure.svg",      styleName: "icon-azure"},
    {name: "Git",           rank: 4,        icon: "/logos/github.svg",              styleName: "icon-github"},
    {name: "Next.js",       rank: 5,        icon: "/logos/nextjs2.svg",             styleName: "icon-nextjs"},
    {name: "Java",          rank: 3,        icon: "/logos/java.svg",                styleName: "icon-java"},
    {name: "Visual Studio", rank: 3,        icon: "/vscode_icon.svg",               styleName: "icon-visual-studio"},
    {name: "Metasploit",    rank: 5,        icon: "/logos/metasploit.png",          styleName: "icon-metasploit"},
];


const AllSkills = () => {
    
  function sortSkills(a, b){
      if(a.rank > b.rank) return -1;
      if(a.rank < b.rank) return 1;
      
      // Do Other Compares later
      return 0;
  }
    
  return (
    <>
    {skillItems.sort(sortSkills).map((item) => (
        <Skills options={item} />
    ))}
    </>
  );
};

export default AllSkills;
