

const FormInput = ({ label, inputOptions}) => {
  return (
    <div className='form-input-container'>
        <label htmlFor="">{label}</label>
        <input {...inputOptions}/>
    </div>
  )
}

export default FormInput