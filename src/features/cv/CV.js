import { LogoutIcon } from "@heroicons/react/outline"
import { PulseLoader } from "react-spinners"
import { useSendLogoutMutation } from "../auth/authApiSlice"
import { useEffect } from "react"

const CV = () => {
  const [sendLogout, { isLoading, isSuccess }] = useSendLogoutMutation()

  useEffect(() => {
    if (isSuccess) {
      JSON.parse(localStorage.setItem("isLoggedIn", JSON.stringify(false)))
    }
  }, [isSuccess])

  if (isLoading) return <PulseLoader color="#fff" size={150} />

  return (
    <div>
      CV
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={sendLogout}
      >
        <LogoutIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
        Logout
      </button>
    </div>
  )
}

export default CV
