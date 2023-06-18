import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import { Disclosure } from "../../base-components/Headless";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="flex text-lg  text-white px-8 pb-4 items-center justify-between mt-8 intro-y sm:flex-row">
        <h2 className=" font-medium">CV Online</h2>
        <span>
          <Link to="/login">Login</Link>
        </span>
      </div>

      <div className=" intro-y ">
        {/* <section className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Your CV online
                <strong className="font-extrabold text-red-700 sm:block">
                  Just in seconds
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                An easier way to share your CV to employers
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="/get-started"
                >
                  Create CV
                </a>

                <a
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="/about"
                >
                  Open CV
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-primary text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-orange-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Put your CV online
                <span className="sm:block"> Towards your dream Job. </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Let employers access your CV through a customized link
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  to="/cv"
                >
                  Create CV
                </Link>

                <Link
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  to="/access-code"
                >
                  Open CV
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
