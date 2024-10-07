import React from 'react'
import PropTypes from 'prop-types'

const PrimaryButton = ({label, width, onClick, variant}) => {

    if(variant === 'outlined'){
        return(
            <div className={`${width || 'w-fit'}`}>
            <button onClick={onClick} className='w-full rounded h-[42px] lg:text-base text-sm border border-blue-600 hover:opacity-80 hover:shadow-lg text-blue-700 px-6'>
                {label}
            </button>
        </div>
        )
    }

  return (
    <div className={`${width || 'w-fit'}`}>
        <button onClick={onClick} className='w-full rounded h-[42px] lg:text-lg text-sm bg-blue-600 hover:opacity-90 hover:shadow-lg text-white px-6'>
            {label}
        </button>
    </div>
  )
}

PrimaryButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.string,
    variant: PropTypes.string,
}

export default PrimaryButton