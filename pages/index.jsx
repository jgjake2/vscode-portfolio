import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';




export default function HomePage() {
    var _typewriter1 = null;
    var _typewriter2 = null;
    function handleTypewriter(typewriter1, typewriter2){
        if(typewriter1){
            _typewriter1 = _typewriter1 || typewriter1;
            typewriter1.state.elements.wrapper.style.fontSize = '3em';
            typewriter1.state.elements.wrapper.style.marginBottom = '1rem';
            typewriter1.state.elements.wrapper.style.color = '#eee';
            typewriter1.state.elements.wrapper.style.display = 'inline-block';
            
            
            
            typewriter1.state.elements.cursor.style.fontSize = '3em';
            typewriter1.state.elements.cursor.style.marginBottom = '1rem';
            typewriter1.state.elements.cursor.style.color = 'var(--accent-color)';
            typewriter1.state.elements.cursor.style.display = 'inline-block';
            
            typewriter1.typeString('Full Stack Web Developer')
            .callFunction(() => {
                typewriter1.stop();
                typewriter1.state.elements.cursor.style.visibility = 'hidden';
                //typewriter1.state.elements.cursor.style.display = 'none';
                if(_typewriter2){
                    setTimeout(function(){
                        
                        _typewriter2.start();
                    }, 500);
                }
            })
            .start();
        } else {
            _typewriter2 = _typewriter2 || typewriter2;
            typewriter2.state.elements.wrapper.style.fontSize = '3em';
            typewriter2.state.elements.wrapper.style.marginBottom = '3rem';
            typewriter2.state.elements.wrapper.style.color = '#eee';
            typewriter2.state.elements.wrapper.style.display = 'inline-block';
            typewriter2.state.elements.wrapper.innerHTML = '&nbsp;';
            //typewriter2.state.elements.wrapper.innerHTML = ' ';
            
            
            
            typewriter2.state.elements.cursor.style.fontSize = '3em';
            typewriter2.state.elements.cursor.style.marginBottom = '3rem';
            typewriter2.state.elements.cursor.style.color = 'var(--accent-color)';
            typewriter2.state.elements.cursor.style.display = 'inline-block';
            typewriter2.state.elements.cursor.style.visibility = 'hidden';
            
            
            typewriter2.callFunction(() => {
                typewriter2.state.elements.cursor.style.visibility = 'visible';
            })
            .deleteAll(0)
            .typeString('Cybersecurity Analyst')
            .callFunction(() => {
                typewriter2.stop();
            });
        }
    }
    
    function _onCreateTextNode(character, textNode){
        
        if(/\&nbsp;/i.test(_typewriter2.state.elements.wrapper.innerHTML)){
            if(_typewriter2.state.elements.wrapper.childNodes.length === 1){
                _typewriter2.state.elements.wrapper.replaceChild(textNode, _typewriter2.state.elements.wrapper.childNodes[0]);
                
                return null;
            }
        }
        
        return textNode;
    }
    
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>Secure</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Eric Gardner</h1>
            <Typewriter className={styles.Typewriter} options={{delay: 90, skipAddStyles: false}} onInit={(typewriter) => {
                handleTypewriter(typewriter);
            }} />
            <Typewriter className={styles.Typewriter} options={{delay: 90, skipAddStyles: false, onCreateTextNode: _onCreateTextNode}} onInit={(typewriter) => {
                handleTypewriter(null, typewriter);
            }} />
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}

