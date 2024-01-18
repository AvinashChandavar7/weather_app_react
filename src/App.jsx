
import { Routes, Route } from "react-router-dom";

import RootLayout from "./_root/RootLayout";

import {
  Home,
} from "./_root/pages/index.js";


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        <Route element={<RootLayout />} >
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>

    </main>
  )
}

export default App;