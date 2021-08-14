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
        <div className="px-8 py-5 lg:space-y-20 sm:px-12">
          <h1 className="mt-10 text-3xl font-bold text-center lg:text-5xl lg:mt-0">
            Follo App
          </h1>
          <ul className="hidden px-4 space-y-3 text-xl list-disc lg:block">
            <li>Get to monitor and update your medication records.</li>
            <li>Book appointments with doctors.</li>
            <li>Residence update incase of emergencies.</li>
          </ul>
          <div className="flex justify-center mt-10 ">
            <Tabs
              tabs={{
                login: 'Login',
                register: 'Register'
              }}
              selected={tab}
              onChange={setTab}
              className="mx-auto bg-white rounded"
            />
          </div>
        </div>
      </div>
      {/* Auth page */}
      <div className="lg:w-[55%] flex items-center justify-center">
        {/* form area */}
        <div className="w-full">
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
