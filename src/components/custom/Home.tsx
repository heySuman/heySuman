import { motion } from "framer-motion";

export function Home() {
  const text =
    "React Developer creating sleek, user-friendly interfaces and experiences.".split(
      " "
    );
  return (
    <section
      id="home"
      className={"font-bold text-white h-screen grid place-content-center p-2"}
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
        className="text-sm sm:text-xl"
      >
        Suman Shrestha
      </motion.h2>

      <motion.h1 className="text-4xl sm:text-5xl font-bold text-white text-center lg:w-1/2 mx-auto">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: i / 25,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </motion.h1>
      {/* <div className="flex justify-center gap-2 my-6 flex-wrap">
        <Button className="flex-1 w-full sm:w-fit h-[50px] sm:flex-0 text-[1rem] uppercase">
          See My Crafts
        </Button>
        <Button className="w-full sm:w-fit sm:flex-0 h-[50px] text-[1rem] uppercase">
          Connect With Me
        </Button>
      </div> */}
    </section>
  );
}
