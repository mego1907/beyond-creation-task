

const CustomModal = ({ open, setOpen, formData }) => {

  const close = () => {
    setOpen(false);
  }

  return (
    <div className={`fixed top-0 left-0 z-50 ${open ? "flex" : "hidden"} w-full h-screen items-center justify-center`}>
      <div className="bg-black opacity-70 w-full h-screen fixed top-0 left-0" onClick={close}></div>
      <div className="bg-white shadow-lg rounded-md p-5 md:w-2/5 w-full z-50">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">Form Data</h3>
          <button type="button" className="text-4xl" onClick={close}>×</button>
        </div>

        <div className="flex flex-col gap-8">

          <ul className="ml-5 flex flex-col gap-4 font-semibold">
            <li className="flex gap-5">
              <span>Name :</span> <span>{formData?.name}</span>
            </li>
            <li className="flex gap-5">
              <span>Email :</span> <span>{formData?.email}</span>
            </li>
            <li className="flex gap-5">
              <span>Phone :</span> <span>{formData?.phoneNumber}</span>
            </li>
            <li className="flex gap-5">
              <span>bugdet :</span> <span>{formData?.bugdet}</span>
            </li>
            <li className="flex gap-5">
              <span>message :</span> <span>{formData?.message}</span>
            </li>
          </ul>
          
          <div className="flex gap-3">
            <button type="button" className="bg-blue-300 py-2 px-5 rounded-sm font-medium" onClick={close}>Ok</button>
            <button type="button" className="bg-gray-300 py-2 px-5 rounded-sm font-medium" onClick={close}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomModal