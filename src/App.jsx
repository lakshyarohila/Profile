import bg from "./svg.svg";
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
              <div className="box w-full flex items-center pl-4 ">
                <div className="name w-32 text-white text-2xl font-semibold border-r my-1">
                  <h1>Learn Hub</h1>
                </div>
                <h1 className="pl-4"> hello</h1>
              </div>
              <div className="box w-full flex items-center pl-4 ">
                <div className="name w-32 text-white text-2xl font-semibold border-r my-1">
                  <h1>Learn Hub</h1>
                </div>
                <h1 className="pl-4"> hello</h1>
              </div>
              <div className="box w-full flex items-center pl-4 ">
                <div className="name w-32 text-white text-2xl font-semibold border-r my-1">
                  <h1>Learn Hub</h1>
                </div>
                <h1 className="pl-4"> hello</h1>
              </div>
              <div className="box w-full flex items-center pl-4 ">
                <div className="name w-32 text-white text-2xl font-semibold border-r my-1">
                  <h1>Learn Hub</h1>
                </div>
                <h1 className="pl-4"> hello</h1>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
