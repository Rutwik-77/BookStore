import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthProvider";

function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handlelogout = () => {
      try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem('Users');
        toast.success("Logout Success");
        window.location.reload();
      } catch (error) {
        toast.error("Error" + error.message)
      }
    }
  return (
    <button className='px-3 py-2 bg-red-600 rounded-md text-white cursor-pointer' onClick={handlelogout}>Logout</button>
  )
}

export default Logout