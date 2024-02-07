import { useState } from 'react'
import "preline/preline";
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './routes/router';



function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<RouterProvider router={router} />

</div>
  )
}

export default App
