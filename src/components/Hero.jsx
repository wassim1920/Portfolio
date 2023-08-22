import { styles } from "../styles";
import "./Hero.css"

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
        <img src = "https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/288854865_3257475611165990_3217949761215482979_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=YVkmC5V-KTwAX_Jg2JO&_nc_ht=scontent.ftun2-2.fna&oh=00_AfCRnGsjdoh_8VtxpzlJXeFZG5Px5wdIUCATqRPDqMvlZQ&oe=64E9B7ED" 
             alt="Portfolio Item" />
        </dir>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'> */}


        {/* <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
