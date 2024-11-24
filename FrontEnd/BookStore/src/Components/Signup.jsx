/** @format */

import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:5000/users/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfull");
          const modal = document.getElementById("my_modal_3");
          if (modal) {
            modal.close(); // Close the modal
          }
          navigate("/");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };
  return (
    <>
      <div>
        <div
          id='my_modal_3'
          className='flex h-screen items-center justify-center border dark:bg-slate-900 dark:text-white'
        >
          <div className='modal-box dark:bg-slate-800 dark:text-white'>
            <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to='/'
                className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              >
                ✕
              </Link>

              <h3 className='font-bold text-2xl'>Sign Up</h3>
              {/* for name */}
              <div className='mt-5 space-y-2'>
                <span>Name</span>
                <br />
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter your Fullname'
                  className='w-80 px-3 py-1 rounded-md outline-none border dark:bg-slate-800 dark:text-white'
                  {...register("fullname", { required: true })}
                />{" "}
                <br />
                {errors.fullname && (
                  <span className='text-sm text-red-600'>
                    This field is required
                  </span>
                )}
              </div>
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
                  SignUp
                </button>
                {/* <p>
                Have Account?
                <button
                  className='underline text-blue-500 cursor-pointer text-xl'
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login></Login>
              </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
