import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-signin',
  inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    >
      {children}
    </button>
  )
}

export default Button

// default button
// inverted button
// google sign in button
