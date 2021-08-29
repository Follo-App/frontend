import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const Login = ({ setTab }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <motion.div
      layout
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -1000, opacity: 0 }}
      transition={{
        type: 'spring',
        duration: 1,
        delay: 0.25
        // stiffness: 260,
        // damping: 20
      }}
      className="lg:pt-12 lg:space-y-16"
    >
      <h1
        className={clsx(
          'mx-auto text-center -mt-16 font-bold text-blue-500 text-3xl'
        )}
      >
        Login
      </h1>
      <form method="post" className="space-y-12">
        <div className="mx-auto md:w-4/5">
          <label htmlFor="email" className={clsx('block text-xl')}>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe77@mail.com"
            autoComplete="off"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={clsx(
              'border block w-full px-3 py-2 focus:outline-none text-xl border-blue-300 rounded-lg text-gray-500 focus:ring-blue-200 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40'
            )}
          />
        </div>
        <div className="mx-auto md:w-4/5">
          <label htmlFor="password" className={clsx('block text-xl')}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="off"
            className={clsx(
              'border block w-full px-3 py-1.5 focus:outline-none text-lg border-blue-300 rounded-lg text-gray-500 focus:ring-blue-200 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40'
            )}
          />
        </div>
        <button
          type="submit"
          className={clsx(
            'block bg-blue-500 md:w-4/5 w-full mx-auto py-2 text-xl text-white font-medium rounded-lg hover:bg-blue-600 transition-all'
          )}
        >
          Login
        </button>

        <p className={clsx('text-center mt-5')}>
          Don't have a{' '}
          <span className="font-serif font-bold text-blue-500">Follo App</span>{' '}
          account,{' '}
          <span
            className="font-serif font-bold text-blue-500 cursor-pointer"
            onClick={() => setTab('register')}
          >
            Register
          </span>
        </p>
      </form>
    </motion.div>
  )
}

export default Login
