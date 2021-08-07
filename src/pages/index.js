import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'

const Index = () => {
  return (
    <main className="items-center w-full min-h-screen md:flex md:justify-evenly">
      <div className="flex items-center justify-center w-full text-white bg-blue-600 h-[50vh] md:w-1/2 md:h-screen">
        <div className="">
          <img
            src={require('@/img/iconw192.png')}
            className="w-auto mx-auto h-36 md:h-44"
            alt="Follo App white"
          />
          <h1 className="mt-8 font-serif text-2xl font-bold capitalize md:text-4xl md:text-white">
            follo app
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 p-4 md:p-10 bg-white flex items-center h-[50vh] md:h-screen">
        <div className="w-full h-full md:h-[60%] flex flex-col justify-between">
          <div className="flex flex-col justify-between space-y-2 h-2/5">
            <Link href="/">
              <button
                type="button"
                className="block w-full md:w-[80%] mx-auto text-white hover:shadow font-semibold uppercase font-serif py-2 bg-blue-600 hover:bg-blue-500 transform transition-all hover:translate-y-1"
              >
                Login
              </button>
            </Link>
            <Link href="/">
              <button
                type="button"
                className="block w-full md:w-[80%] mx-auto text-white hover:shadow font-semibold uppercase font-serif py-2 bg-blue-600 hover:bg-blue-500 transform transition-all hover:translate-y-1"
              >
                Register
              </button>
            </Link>
          </div>
          {/* or */}
          <div className="relative">
            <hr className="w-full md:w-[80%] mx-auto border bg-opacity-50 h-[0.05rem] bg-blue-600" />
            <h6 className="block w-7 text-center mx-auto -mt-3.5 bg-blue-100">
              or
            </h6>
          </div>
          {/* Google auth button */}
          <button
            type="button"
            className="w-full md:w-[80%] mx-auto text-white hover:shadow font-semibold uppercase font-serif py-2 bg-blue-600 hover:bg-blue-500 flex justify-center transform transition-all hover:translate-y-1"
          >
            <FaGoogle className="w-auto h-5" />
            <span className="ml-3">Google</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Index
