import React from 'react'

const Index = () => {
  return (
    <main className="items-center w-full min-h-screen md:flex md:justify-evenly">
      <div className="flex items-center justify-center w-full text-white bg-blue-600 h-[50vh] md:w-1/2 md:h-screen">
        <div className="">
          <img
            src={require('@/img/iconw192.png')}
            className="w-auto mx-auto h-36 md:h-44 "
            alt="Follo App white"
          />
          <h1 className="mt-8 font-serif text-2xl font-bold capitalize md:text-4xl md:text-white">
            follo app
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 p-10 bg-white h-[50vh] md:h-screen">
        <div className="w-full h-full bg-green-400">hello</div>
      </div>
    </main>
  )
}

export default Index
