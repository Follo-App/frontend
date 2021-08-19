import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const Login = ({ tab }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <motion.div
      layout
      animate={
        tab == 'login' ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }
      }
      transition={{ delay: 0.5 }}
      className="lg:space-y-16"
    >
      <h1
        className={clsx(
          'mx-auto text-center -mt-10 font-bold text-blue-500 text-3xl hidden lg:block'
        )}
      >
        Login
      </h1>
      <form method="post" className="-mt-10 space-y-12 lg:-mt-0">
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
      </form>
    </motion.div>
  )
}

export default Login
