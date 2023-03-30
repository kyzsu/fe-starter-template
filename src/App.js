import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./features/auth/Login"
import RequireAuth from "./features/auth/RequireAuth"
import Home from "./features/home/Home"
import CV from "./features/cv/CV"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Access */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        {/* Private Access */}
        <Route element={<RequireAuth />}>
          <Route path="cv" element={<CV />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
