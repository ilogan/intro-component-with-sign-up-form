import React from "react";

function App() {
  return (
    <div className="px-8">
      <header className="text-white text-center py-10">
        <h1 className=" mt-4 text-4xl font-semibold leading-tight">
          Learn to code by watching others
        </h1>
        <p className="mt-4 font-normal">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </header>
      <aside>
        <div className="bg-purple-800 text-white px-16 py-4 rounded-lg">
          <p className="font-light">
            <span className="font-semibold">Try it free 7 days</span> then
            $20/mo. thereafter
          </p>
        </div>
        <div className="mt-5 bg-gray-200 text-center p-4 rounded-lg shadow-inner">
          <form className="w-full">
            <input className="w-full" placeholder="First Name" />
            <input className="w-full" placeholder="Last Name" />
            <input className="w-full" placeholder="Email Address" />
            <input className="w-full" placeholder="Password" />
            <button className="w-full bg-green-400 uppercase text-white px-4 py-4">
              Claim your free trial
            </button>
          </form>
          <small>
            By clicking the button, you are agreeing to our Terms and Services
          </small>
        </div>
      </aside>
    </div>
  );
}

export default App;
