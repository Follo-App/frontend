import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Tabs from '@/components/Tabs'
import Login from '@/components/login'
import Register from '@/components/register'

const Index = () => {
  const [tab, setTab] = useState('login')

  return (
    <main className="min-h-screen lg:flex">
      {/* intro page */}
      <div className="lg:text-white text-blue-600 bg-white lg:bg-blue-600 lg:w-[45%] lg:clipHead lg:min-h-screen flex items-center justify-center">
        <div className="px-8 py-5 sm:px-12">
          <h1 className="mt-10 text-xl font-bold text-center lg:text-5xl lg:mt-0">
            Follo App
          </h1>
          <ul className="hidden mt-6 text-lg list-disc lg:block">
            <li>Get to monitor and update your medication records.</li>
            <li>Book appointments with doctors.</li>
            <li>Residence update incase of emergencies.</li>
          </ul>
        </div>
      </div>
      {/* Auth page */}
      <div className="lg:w-[55%]">
        {/* form area */}
        <div className="">
          <div className="flex justify-center mt-10">
            <Tabs
              tabs={{
                login: 'Login',
                register: 'Register'
              }}
              selected={tab}
              onChange={setTab}
              className="mx-auto rounded-2xl bg-sky-100"
            />
          </div>
          <div className="px-8 py-5 mt-10 sm:px-12">
            <AnimatePresence>
              {tab === 'login' && <Login tab={tab} />}
              {tab === 'register' && <Register tab={tab} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Index
