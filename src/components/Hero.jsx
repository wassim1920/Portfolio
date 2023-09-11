import { styles } from "../styles";
import "./Hero.css"
import w from "../assets/w.png"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Wassim Hssin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          web developer dedicated to crafting exceptional online experiences.  <br className='sm:block hidden' />
          Proficient in front-end and back-end technologies, I bring creativity and precision to every project.
          </p>
        </div>
        <dir className = "portfolio-item">
        <img src = {w} 
             alt="Portfolio Item" />
        </dir>
      </div>
    </section>
  );
};

export default Hero;
