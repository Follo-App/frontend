import clsx from 'clsx'
import { motion, AnimateSharedLayout } from 'framer-motion'

export default function Tabs({
  tabs,
  selected = Array.isArray(tabs) ? tabs[0] : Object.keys(tabs)[0],
  onChange = () => {},
  className = ''
}) {
  return (
    <AnimateSharedLayout>
      <ul
        className={clsx('whitespace-nowrap grid', className, {})}
        style={{
          gridTemplateColumns: `repeat(${
            Array.isArray(tabs) ? tabs.length : Object.keys(tabs).length
          }, minmax(0, 1fr))`
        }}
      >
        {(Array.isArray(tabs) ? tabs : Object.keys(tabs)).map(tab => (
          <Item
            key={tab}
            tab={Array.isArray(tabs) ? tab : tabs[tab]}
            isSelected={selected === tab}
            onClick={() => onChange(tab)}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  )
}

function Item({ tab, isSelected, onClick }) {
  return (
    <li className="relative">
      {isSelected && (
        <motion.div
          layoutId="highlight"
          className="absolute inset-0 bg-blue-500 rounded-2xl"
        />
      )}
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          'block w-full relative z-10 px-7 py-1.5 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300  rounded-2xl',
          { 'text-white': isSelected, 'text-gray-800': !isSelected }
        )}
      >
        {tab}
      </button>
    </li>
  )
}
