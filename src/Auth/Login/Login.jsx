import { useForm } from "react-hook-form";
import task from "../../assets/image/Tablet login-bro.png";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
const Login = () => {
const {signInUser, setUser, signInWithGoogle} = useContext(AuthContext)
const navigate = useNavigate()
// const handleGoogleLogin = ()=>{
//   signInWithGoogle()
//   .then(result=>{
//     setUser(result.user)
//     navigate('/add-task')
//     toast.success('login successfull')
//   }).catch(err=>{
//     console.log(err)
//   })
// }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    signInUser(result=>{
      console.log(result.user)
      setUser(result.user)
      reset()
      navigate('/add-task')
      toast.success('User succesfully login')
    })
  };

  return (
    <div className=" bg-white dark:bg-dark backdrop-blur-md p-3">
      <h2 className="text-3xl font-bold text-secondary dark:text-white text-center mb-6">
        Welcome
      </h2>

      <div className="md:flex gap-10 items-center lg:max-w-7xl mx-auto">
        <div className="md:w-6/12 hidden md:block">
          <img src={task} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 md:w-6/12 mx-auto bg-white dark:bg-secondary p-6 rounded-lg border dark:border-border"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
            Login
          </h2>

          <div>
            <label className="block text-secondary dark:text-white font-semibold">
              Email
            </label>
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-dark dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
              placeholder="Enter your email..."
            />
            {errors.email && (
              <span className="text-red-600">Valid email is required</span>
            )}
          </div>

          <div>
            <label className="block text-secondary dark:text-white font-semibold">
              Password
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-dark dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
              placeholder="Enter your password..."
            />
            {errors.password && (
              <span className="text-red-600">
                Password must be at least 6 characters
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold py-3 rounded-lg  transition duration-500"
          >
            Login
          </button>

          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            OR
          </div>

          {/* <button onClick={handleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-dark text-gray-800 dark:text-white font-semibold py-3 rounded-lg hover:shadow-md transition duration-300"
          >
            <FaGoogle className="text-lg" />
            <span>Sign in with Google</span>
          </button> */}
          <SocialLogin/>

          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
            Don&apos;t have an account{" "}
            <Link
              to="/auth/register"
              className="text-primary font-semibold hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
