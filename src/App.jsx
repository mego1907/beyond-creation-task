import { useState } from "react"
import { 
  CustomModal, 
  DiscoverSec, 
  Form, 
  Header 
} from "./components"


function App() {
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState({});

  return (
    <div className="overflow-hidden">
      <Header />
      <DiscoverSec />
      <Form formData={formData} setFormData={setFormData} setOpenModal={setOpenModal} />
      <CustomModal open={openModal} setOpen={setOpenModal} formData={formData} />

    </div>
  )
}

export default App
