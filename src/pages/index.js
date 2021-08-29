import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Tabs from '@/components/Tabs'
import Login from '@/components/login'
import Register from '@/components/register'
import clsx from 'clsx'
import { HiChevronDoubleDown } from 'react-icons/hi'

const Index = () => {
  const [tab, setTab] = useState('login') // login / register
  const [page, setPage] = useState('index') // index / auth

  return (
    <main className="lg:flex">
      {/* intro page */}
      <div
        className={clsx(
          'lg:text-white min-h-screen lg:fixed text-blue-600 bg-white lg:bg-blue-600 lg:w-[45%] lg:clipHead transform transition-all lg:min-h-screen flex items-center justify-center',
          {
            '-translate-y-full lg:translate-y-0 fixed': page !== 'index'
          }
        )}
      >
        <div className="px-8 py-5 space-y-20 sm:px-12">
          <h1 className="mt-10 font-serif text-4xl font-black text-center uppercase lg:text-5xl lg:mt-0">
            Follo App
          </h1>
          <ul className="px-4 space-y-3 text-xl list-disc">
            {[
              'Get to monitor and update your medication records.',
              'Book appointments with doctors.',
              'Residence update incase of emergencies.'
            ].map((point, i) => (
              <motion.li key={i}>{point}</motion.li>
            ))}
          </ul>
          <div className="justify-center hidden mt-10 lg:flex">
            <Tabs
              tabs={{
                login: 'Login',
                register: 'Register'
              }}
              selected={tab}
              onChange={setTab}
              className="mx-auto bg-blue-100 lg:bg-white"
            />
          </div>
          <div className="flex justify-center mt-10 lg:hidden">
            <button
              type="button"
              className="grid w-12 h-12 transition-colors bg-blue-500 rounded-full place-items-center bg-opacity-30 hover:bg-opacity-60"
              onClick={() => setPage('auth')}
            >
              <HiChevronDoubleDown className="w-auto h-7 animate-bounceIn" />
            </button>
          </div>
        </div>
      </div>
      {/* Auth page */}
      <div
        className={clsx(
          'lg:w-[55%] lg:h-screen min-h-screen lg:overflow-y-auto overflow-x-hidden  lg:whitespace-nowrap flex items-center justify-center',
          {
            'translate-y-full lg:translate-y-0 fixed lg:right-0':
              page !== 'auth',
            'lg:right-0 lg:fixed': page === 'auth'
          }
        )}
      >
        {/* form area */}
        <div className={clsx('px-8 py-12 w-full mt-10 sm:px-12')}>
          <AnimateSharedLayout>
            {tab === 'register' ? (
              <Register tab={tab} setTab={setTab} />
            ) : (
              <Login tab={tab} setTab={setTab} />
            )}
          </AnimateSharedLayout>
        </div>
      </div>
    </main>
  )
}

export default Index
