import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 40,
  x = 0,
  scale = 1,
  className = '',
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale: scale === 1 ? 1 : 0.9 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
