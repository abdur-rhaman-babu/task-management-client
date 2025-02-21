import { useForm } from "react-hook-form";
import registerImage from "../../assets/image/Tablet login-bro.png";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const {createUser,setUser, updataUserProfile, signInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGoogleLogin = ()=>{
    signInWithGoogle()
    .then(result=>{
      setUser(result.user)
      navigate('/add-task')
      toast.success('login successfull')
    }).catch(err=>{
      console.log(err)
    })
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const updateProfile = {
      displayName: data.name,
      userId: data.userId
    }
    createUser(data.email, data.password)
    .then(result=>{
      console.log(result.user)
      updataUserProfile(updateProfile)
      setUser(result.user)
      toast.success('User successfully Loggedin')
      reset()
      navigate('/add-task')
    }).catch(err=>{
      console.log(err)
    })
  };

  return (
    <div className="bg-white dark:bg-dark p-6">
      <h2 className="text-3xl font-bold text-secondary dark:text-white text-center mb-6">
        Create an Account
      </h2>

      <div className="md:flex gap-10 items-center lg:max-w-7xl mx-auto">
        <div className="hidden md:block md:w-6/12">
          <img src={registerImage} alt="Register" className="w-full" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-6/12 mx-auto bg-white dark:bg-secondary p-6 rounded-lg border dark:border-border"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">
            Register
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-secondary dark:text-white font-semibold">
                User ID
              </label>
              <input
                {...register("userId", { required: true })}
                type="text"
                className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-dark dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
                placeholder="Enter user ID..."
              />
              {errors.userId && (
                <span className="text-red-600">User ID is required</span>
              )}
            </div>

            <div>
              <label className="block text-secondary dark:text-white font-semibold">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-dark dark:text-white focus:ring-2 focus:ring-primary focus:outline-none transition duration-300"
                placeholder="Enter your name..."
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>

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
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold py-3 rounded-lg  transition duration-500"
          >
            Register
          </button>

          <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-3">
            OR
          </div>

          <button onClick={handleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-dark text-gray-800 dark:text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            <FaGoogle className="text-lg" />
            <span>Sign up with Google</span>
          </button>

          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
