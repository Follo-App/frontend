import { motion } from 'framer-motion'

const Register = ({ tab }) => {
  return (
    <motion.div
      animate={tab ? 'register' : 'login'}
      transition={{ delay: 0.5 }}
      variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '100%' }
      }}
      className="bg-yellow-300"
    >
      <h1>Register</h1>
      <form method="post" className="">
        <div className="">
          <label htmlFor="name">Email</label>
          <input type="text" name="email" id="name" placeholder="Email" />
        </div>
      </form>
    </motion.div>
  )
}

export default Register
