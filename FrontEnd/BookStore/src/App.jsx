/** @format */
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./Components/Signup";
import { useAuth } from "./Context/AuthProvider";
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
