import { motion } from 'framer-motion'

const Login = ({ tab }) => {
  return (
    <motion.div
      animate={tab ? 'login' : 'register'}
      transition={{ delay: 0.5 }}
      variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' }
      }}
      className="bg-green-400"
    >
      <h1>Login</h1>
      <form method="post" className="">
        <div className="">
          <label htmlFor="name">Email</label>
          <input type="text" name="email" id="name" placeholder="Email" />
        </div>
      </form>
    </motion.div>
  )
}

export default Login
