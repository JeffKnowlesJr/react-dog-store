import './form-input.styles.scss'

const formInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {/* Inline If with Logical && Operator */}
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          // if value is more than 0 add class
          className={`${
            otherProps.value.length ? 'shrink' : null
          } form-input-label`}
          htmlFor={otherProps.name}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default formInput
