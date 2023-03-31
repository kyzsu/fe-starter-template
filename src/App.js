import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./features/auth/Login"
import RequireAuth from "./features/auth/RequireAuth"
import Home from "./features/home/Home"
import CV from "./features/cv/CV"

function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Access */}
        <Route index element={<Home />} />
        <Route
          path="login"
          element={isLoggedIn ? <Navigate to="/cv" /> : <Login />}
        />

        {/* Private Access */}
        <Route element={<RequireAuth />}>
          <Route path="cv" element={<CV />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
