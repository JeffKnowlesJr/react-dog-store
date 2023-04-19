import { FormInputLabel, Input, Group } from './form-input.styles'

const formInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {/* Inline If with Logical && Operator */}
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          // if value is more than 0 add class
          shrink={otherProps.value.length}
          htmlFor={otherProps.name}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default formInput
