import Image from "next/image";
import { HiDocumentAdd } from "react-icons/hi";
import { FaComments } from "react-icons/fa";
import { AiFillLike, AiFillEdit } from "react-icons/ai";

const Hero = () => {
  return (
    <section>
      <div className="md:container mt-8 md:mt-16 mx-auto">
        <div className="hero-content flex-col gap-24 md:gap-10 md:flex-row-reverse">
          <div className="relative hidden sosmall:block">
            <Image
              src="/images/hero2.png"
              className="max-w-sm rounded-lg shadow-2xl z-20"
              width={520}
              height={120}
              alt="Hero Image"
            />
            <Image
              src="/images/header.png"
              className="max-w-sm rounded-lg shadow-2xl absolute z-10 top-20 right-5"
              width={520}
              height={120}
              alt="Hero Image"
            />
          </div>
          <div className="text-center md:text-start">
            <h1 className="text-5xl font-bold">Create Articles Fast</h1>
            <p className="py-6">
              Welcome to TechTales AI, the cutting-edge platform that empowers you to unleash your ideas without limits.
              In here you can transform your creative vision into captivating articles with unparalleled precision with
              the power of AI.
            </p>
          </div>
        </div>
        <div className="my-4 sosmall:mt-8 md:mt-24">
          <h2 className="text-center text-3xl font-bold">How it works:</h2>
          <div className="grid grid-cols-2 gap-5 md:gap-2 md:grid-cols-4 p-[1rem] mt-3">
            <div className="flex items-center flex-col text-center gap-2">
              <HiDocumentAdd size={60} />
              <h3>1. Users insert the title of the article and let the AI write it</h3>
            </div>
            <div className="flex items-center flex-col text-center gap-2">
              <AiFillEdit size={60} />
              <h3>2. Then you can edit the text, add an image and submit it</h3>
            </div>

            <div className="flex items-center flex-col text-center gap-2">
              <AiFillLike size={60} />
              <h3>3. Others users can like or dislike them</h3>
            </div>
            <div className="flex items-center flex-col text-center gap-2">
              <FaComments size={60} />
              <h3>4. Give feedback to other people articles</h3>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Hero;
