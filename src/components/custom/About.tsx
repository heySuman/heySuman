import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../components/custom/Card";
import { Environment, OrbitControls } from "@react-three/drei";

export function About() {
  const about =
    "Hello, I am a frontend developer based in Kathmandu. I am currently pursuing my undergraduate degree from Herald College Kathmandu. I primarily deal with React to create visually appealing websites.".split(
      " "
    );
  return (
    <section
      id="about"
      className={"font-bold text-white flex items-center mt-6 flex-wrap p-2"}
    >
      <div>
        <h1 className="text-center text-4xl sm:text-5xl sm:w-1/2 mx-auto font-bold my-6">
          About Me
        </h1>
        <p className="text-center sm:w-1/2 mx-auto font-medium my-6">
          {about.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: i / 25,
              }}
              key={i}
              className="text-2xl"
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
      </div>
      <div className="relative h-[300px] w-full">
        <Canvas
          orthographic
          style={{ background: "transparent" }}
          camera={{ position: [10, 1, 1], zoom: 200 }}
        >
          <Model />
          <directionalLight intensity={3} position={[0, 0.1, 1]} />
          <Environment preset="city" />
          <OrbitControls
            enableDamping
            enableZoom={false}
            enablePan={false}
            autoRotate
          />
        </Canvas>
      </div>
    </section>
  );
}
