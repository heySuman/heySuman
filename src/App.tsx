import suman from "./assets/suman-shrestha.png";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function App() {
  const text =
    "React Developer creating user-friendly interfaces and experiences.".split(
      " "
    );

  const about =
    "Hello, I am a frontend developer based in Kathmandu. I am currently pursuing my undergraduate degree from Herald College Kathmandu. I primarily deal with React to create visually appealing websites.".split(
      " "
    );
  return (
    <>
      <header className="text-white p-4 sticky top-0">
        <nav className="w-full justify-center flex list-none gap-20 uppercase font-bold">
          <HashLink smooth to={"#home"}>
            Home
          </HashLink>
          <HashLink smooth to={"#about"}>
            About
          </HashLink>
          <HashLink smooth to={"#projects"}>
            Projects
          </HashLink>
        </nav>
      </header>
      <main>
        <section
          id="home"
          className={"font-bold text-white h-[750px] grid place-content-center"}
        >
          <motion.h2
            id="name"
            whileInView="visible"
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
          >
            Suman Shrestha
          </motion.h2>

          <motion.h1 className="text-5xl font-bold text-white text-center w-1/2 mx-auto">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </motion.h1>
          <div className="flex justify-center gap-2 my-6">
            <button className="p-3 rounded-xl ">See My Crafts</button>
            <button className="p-3 rounded-xl  border-white">
              Connect With Me
            </button>
          </div>
        </section>

        <section
          id="about"
          className={"font-bold text-white h-[750px] grid place-content-center"}
        >
          <h1 className="text-3xl font-bold my-6 text-center">About Me</h1>

          <img
            src={suman}
            alt="suman shrestha photo"
            className="w-[250px] rounded-full mx-auto"
          />
          <p className="text-2xl w-1/2 mx-auto font-medium text-center my-6">
            {about.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
        </section>
        <section id="projects" className={"font-bold text-white h-[750px] grid place-content-center"}>
          <h1>Projects</h1>
        </section>
      </main>
    </>
  );
}

export default App;
