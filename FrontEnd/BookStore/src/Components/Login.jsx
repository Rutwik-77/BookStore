/** @format */

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:5000/users/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfull");
          const modal = document.getElementById("my_modal_3");
          if (modal) {
            modal.close(); // Close the modal
          }
          window.location.reload();
          navigate("/");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <div>
      <dialog id='my_modal_3' className='modal '>
        <div className='modal-box dark:bg-slate-800 dark:text-white'>
          <form method='dialog' onSubmit={handleSubmit(onSubmit)} className="dark:bg-slate-800 dark:text-white">

            <button
              type='button'
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={() => document.getElementById("my_modal_3").close()} // Close modal manually
            >
              ✕
            </button>

            <h3 className='font-bold text-2xl'>Login</h3>
            {/* For email */}
            <div className='mt-5 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type='email'
                name=''
                id=''
                placeholder='Enter your Email'
                className='w-80 px-3 py-1 rounded-md outline-none border dark:bg-slate-800 dark:text-white'
                {...register("email", { required: true })}
              />{" "}
              <br />
              {errors.email && (
                <span className='text-sm text-red-600'>
                  This field is required
                </span>
              )}
            </div>
            {/* For password */}
            <div className='mt-5 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type='text'
                name=''
                id=''
                placeholder='Enter your Password'
                className='w-80 px-3 py-1 rounded-md outline-none border dark:bg-slate-800 dark:text-white'
                {...register("password", { required: true })}
              />{" "}
              <br />
              {errors.password && (
                <span className='text-sm text-red-600'>
                  This field is required
                </span>
              )}
            </div>

            {/* for button */}
            <div className='flex items-center justify-between mt-6'>
              <button className='bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-pink-700 duration-300'>
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link
                  to='/signup'
                  className='underline text-blue-500 cursor-pointer'
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
