import bg from "./svg.svg";
import c from './c.svg';
import cc from './cc.svg';
import html5 from './html5.svg';
import css from './css.svg';
import node from './node-js.svg';
import js from './javascript.svg';
import tail from './tailwind-css.svg';
function App() {
  return (
    <>
      <main className="w-full  ">
        <div className="containerr  mt-6 mx-64 pt-44  flex flex-col items-center h-[3000px]  bg-white/10 backdrop-blur-lg rounded-2xl">
          <section className="first flex h-54 justify-evenly items-center w-full ">
            <div className="text-white">
              <h1 className="text-4xl font-bold">Lakshya Rohila</h1>
              <h3 className="text-2xl font-semibold">Software Engineer</h3>
            </div>

            <div className="bg-white/10 rounded-full w-72 h-72">
              <img className="w-full h-60" src={bg} alt="" />
            </div>
          </section>

          <section className="second pt-32 w-full flex-col flex">
            <h1 className="text-3xl ml-16 font-medium w-fit text-center bg-white rounded-full px-4 py-1 ">
              Projects{" "}
            </h1>

            <div className="daddy space-y-6 flex h-40 flex-col w-full mt-20">
              <a href="https://learnhub1406.netlify.app/">
                <div className="box w-full flex items-center pl-4 ">
                  <div className="name w-32 text-white text-2xl font-semibold border-r my-1">
                    <h1 className="cursor-pointer">Learn Hub</h1>
                  </div>

                  <h1 className="pl-4 bg-gray-400/10 backdrop-blur-md  text-white font-medium text-lg ml-2 px-2 rounded-full">
                    {" "}
                    A Platfrom For Learning Code & New Technologys
                  </h1>
                </div>
              </a>
              <div className="box w-full flex items-center pl-4 ">
                <div className="name w-32 text-white text-2xl font-semibold border-r my-1">
                  <h1 className="cursor-pointer">Tars</h1>
                </div>
                <h1 className="pl-4  bg-gray-400/10 backdrop-blur-md  text-white font-medium text-lg ml-2 px-2 rounded-full">
                  {" "}
                  Web App Like Chat-GPT - Using Open-Ai{" "}
                </h1>
              </div>
              <div className="box w-full flex items-center pl-4 ">
                <div className="name w-32 text-white text-2xl font-semibold border-r my-1">
                  <h1 className="cursor-pointer">Learn Hub</h1>
                </div>
                <h1 className="pl-4  bg-gray-400/10 backdrop-blur-md  text-white font-medium text-lg ml-2 px-2 rounded-full">
                  {" "}
                  hello
                </h1>
              </div>
              <div className="box w-full flex items-center pl-4 ">
                <div className="name w-32 text-white text-2xl font-semibold border-r my-1">
                  <h1 className="cursor-pointer">Learn Hub</h1>
                </div>
                <h1 className="pl-4  bg-gray-400/10 backdrop-blur-md  text-white font-medium text-lg ml-2 px-2 rounded-full">
                  {" "}
                  hello
                </h1>
              </div>
            </div>
          </section>

          <section className="mt-32 flex flex-col w-full">
            <h1 className="text-3xl ml-16 font-medium mb-4 w-fit text-center bg-white rounded-full px-4 py-1">Technologys -Skills</h1>
            <div className="daddy grid grid-cols-4 space-y-5 mt-6  ml-8">
              <div className="icon">
                <img className="w-20 h-20" src={c} alt="" />
                <h1 className="text-white pl-8 pt-2">C</h1>
              </div>
              <div className="icon">
                <img className="w-20 h-20" src={cc} alt="" />
                <h1 className="text-white pl-7 pt-2">C++</h1>
              </div>
              <div className="icon">
                <img className="w-20 h-20" src={html5} alt="" />
                <h1 className="text-white pl-6 pt-2">HTML</h1>
              </div>
              <div className="icon">
                <img className="w-20 h-20" src={css} alt="" />
                <h1 className="text-white pl-6 pt-2">CSS</h1>
              </div>
              <div className="icon">
                <img className="w-20 h-20" src={node} alt="" />
                <h1 className="text-white pl-3 pt-2">Node.Js</h1>
              </div>
              <div className="icon">
                <img className="w-20 h-20" src={js} alt="" />
                <h1 className="text-white pl-6 pt-2">JavaScript</h1>
              </div>
              <div className="icon">
                <img className="w-20 h-20" src={tail} alt="" />
                <h1 className="text-white pl-1 pt-2">Tailwind-Css</h1>
              </div>
            </div>

          </section>
        </div>
      </main>
    </>
  );
}

export default App;
