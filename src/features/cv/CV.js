import { LogoutIcon } from "@heroicons/react/outline"
import { PulseLoader } from "react-spinners"
import { useSendLogoutMutation } from "../auth/authApiSlice"

const CV = () => {
  const [sendLogout, { isLoading }] = useSendLogoutMutation()

  if (isLoading) return <PulseLoader color="#fff" size={150} />

  return (
    <div>
      CV
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={sendLogout}
      >
        <LogoutIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Logout
      </button>
    </div>
  )
}

export default CV
