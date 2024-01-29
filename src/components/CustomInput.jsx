

// eslint-disable-next-line react/prop-types
const CustomInput = ({ type = "text", name, placeholder, onChange, error, register }) => {

  if(type === "select") {
    return(
      <select 
        placeholder={placeholder} 
        className="w-full outline-none border-b-[1px] border-[#646464] py-4 bg-transparent" 
        name={name}
        onChange={onChange}
        {...register}
      >
        <option value="">Choose your bugdet</option>
        <option value="test1">test 1</option>
        <option value="test2">test 2</option>
        <option value="test3">test 3</option>
      </select>
    ) 
  } 


  return (
    <input 
      type={type} 
      className="w-full outline-none border-b-[1px] border-[#646464] py-4 bg-transparent"  
      placeholder={placeholder} 
      name={name} 
      onChange={onChange}
      {...register}
    />
  )
}

export default CustomInput