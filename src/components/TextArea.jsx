import PropTypes from 'prop-types';

const TextArea = ({ value, name, type, handleChange, width, label, rows }) => {
    return (
        <div className={`${width || 'w-full'}`}>
            <textarea
                rows={rows || 5}
                placeholder={label}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className='py-2 px-3 border resize-none border-[#808080]/50 w-full lg:text-base text-sm outline-[#121212] rounded'
            />

        </div>
    )
}
TextArea.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    handleChange: PropTypes.func,
    width: PropTypes.string,
    label: PropTypes.string,
    rows: PropTypes.number,
}

export default TextArea