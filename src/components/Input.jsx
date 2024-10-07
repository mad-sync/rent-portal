import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ width , type, name, value, label, handleChange}) => {
  return (
    <div className={`${width || 'w-full'}`}>
        <input type={type} 
                placeholder={label}
                name={name}
                value={value}
                onChange={handleChange}
                className='px-3 h-[42px] w-full bg-transparent border border-[#808080]/80 outline-[#121212] lg:text-base text-sm rounded'
        />
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  width: PropTypes.string,
  label: PropTypes.string,
}

export default Input