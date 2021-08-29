import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const Register = ({ setTab }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [date, setDate] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [residence, setResidence] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <motion.div
      layout
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 1000, opacity: 0 }}
      transition={{
        type: 'spring',
        duration: 1,
        delay: 0.25
        // stiffness: 260,
        // damping: 20
      }}
      className="lg:pt-16 lg:space-y-16"
    >
      <h1
        className={clsx(
          'mx-auto text-center -mt-16 lg:mt-0 font-bold text-blue-500 text-3xl'
        )}
      >
        Register
      </h1>
      <form
        method="post"
        className="w-full mx-auto space-y-8 lg:w-full xl:w-4/5 lg:-mt-0"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Firstname"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              autoComplete="off"
              className={clsx(
                'border block w-full px-3 py-1.5 focus:outline-none text-lg border-blue-300 rounded-lg text-gray-500 focus:ring-blue-200 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40'
              )}
            />
          </div>
          <div className="">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Lastname"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              autoComplete="off"
              className={clsx(
                'border block w-full px-3 py-1.5 focus:outline-none text-lg border-blue-300 rounded-lg text-gray-500 focus:ring-blue-200 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40'
              )}
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="date">Date of Birth</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            autoComplete="off"
            className={clsx(
              'border block w-full px-3 py-1.5 focus:outline-none text-lg border-blue-300 rounded-lg text-gray-500 focus:ring-blue-200 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40'
            )}
          />
        </div>
        <fieldset className="flex items-center justify-evenly">
          <div className="">
            <input
              type="radio"
              name="male"
              id="male"
              autoComplete="off"
              className={clsx(
                'border px-3 py-1.5 focus:outline-none text-lg border-blue-300'
              )}
            />
            <label htmlFor="male" className="ml-5">
              Male
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              name="female"
              id="female"
              autoComplete="off"
              className={clsx(
                'border px-3 py-1.5 focus:outline-none text-lg border-blue-300'
              )}
            />
            <label htmlFor="female" className="ml-5">
              Female
            </label>
          </div>
        </fieldset>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="janedoe87@mail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
            className={clsx(
              'border block w-full px-3 py-1.5 focus:outline-none text-lg border-blue-300 rounded-lg text-gray-500 focus:ring-blue-200 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40'
            )}
          />
        </div>
        <div className="">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            pattern=""
            placeholder="+233-455-564-099"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            autoComplete="off"
            className={clsx(
              'border block w-full px-3 py-1.5 focus:outline-none text-lg border-blue-300 rounded-lg text-gray-500 focus:ring-blue-200 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40'
            )}
          />
        </div>
        <div className="">
          <label htmlFor="residence">Residence</label>
          <input
            type="residence"
            name="residence"
            id="residence"
            placeholder="Residence"
            value={residence}
            onChange={e => setResidence(e.target.value)}
            autoComplete="off"
            className={clsx(
              'border block w-full px-3 py-1.5 focus:outline-none text-lg border-blue-300 rounded-lg text-gray-500 focus:ring-blue-200 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40'
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="">
            <label htmlFor="password">Password</label>
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
          <div className="">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              autoComplete="off"
              className={clsx(
                'border block w-full px-3 py-1.5 focus:outline-none text-lg border-blue-300 rounded-lg text-gray-500 focus:ring-blue-200 transition-colors duration-300 focus:ring focus:ring-offset-1 focus:ring-opacity-40'
              )}
            />
          </div>
        </div>
        <button
          type="submit"
          className={clsx(
            'block bg-blue-500 w-full mx-auto py-2 text-xl text-white font-medium rounded-lg hover:bg-blue-600 transition-all'
          )}
        >
          Register
        </button>

        <p className={clsx('text-center mt-5')}>
          Already have a{' '}
          <span className="font-serif font-bold text-blue-500">Follo App</span>{' '}
          account,{' '}
          <span
            className="font-serif font-bold text-blue-500 cursor-pointer"
            onClick={() => setTab('login')}
          >
            Login
          </span>
        </p>
      </form>
    </motion.div>
  )
}

export default Register
