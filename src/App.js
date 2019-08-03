import React from "react";

function App() {
  return (
    <div className="px-8 pt-4 pb-20">
      <header className="text-white text-center py-10">
        <h1 className=" mt-4 text-4xl font-bold leading-tight tracking-tight">
          Learn to code by watching others
        </h1>
        <p className="mt-5 font-normal">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </header>
      <aside className="text-center">
        <div className="bg-purple-800 text-white px-16 py-4 rounded-lg">
          <div className="font-light">
            <span className="font-semibold">Try it free 7 days</span> then
            $20/mo. thereafter
          </div>
        </div>
        <div className="mt-5 bg-gray-100 text-center p-6 rounded-lg shadow-md">
          <form className="">
            <div className="flex flex-col">
              <input
                className="bg-gray-100 border-2 border-gray-300 p-4 rounded-lg font-semibold"
                placeholder="First Name"
              />
              <input
                className="bg-gray-100 border-2 border-gray-300 p-4 rounded-lg font-semibold mt-4"
                placeholder="Last Name"
              />
              <input
                className="bg-gray-100 border-2 border-gray-300 p-4 rounded-lg font-semibold mt-4"
                placeholder="Email Address"
              />
              <input
                className="bg-gray-100 border-2 border-gray-300 p-4 rounded-lg font-semibold mt-4"
                placeholder="Password"
              />
              <button className="bg-green-400 rounded-lg uppercase text-white font-semibold leading-relaxed px-4 py-4 mt-4">
                Claim your free trial
              </button>
            </div>
          </form>
          <div className="mt-1 px- leading-normal text-xs font-semibold text-gray-500 tracking-wide">
            <small>
              By clicking the button, you are agreeing to <br />
              our{" "}
              <span className="font-bold text-red-400">Terms and Services</span>
            </small>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
