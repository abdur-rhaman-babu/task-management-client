import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { setUser, signInWithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    signInWithGoogle().then((res) => {
      setUser(res.user);
      // console.log(res.user)
      const userInfo = {
        email: res.user?.email,
        displayName: res.user?.displayName,
        userId:
          btoa(res.user?.displayName || "default") +
          "_" +
          Math.floor(Math.random() * 10000),
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        navigate("/add-task");
      });
    });
  };
  return (
    <div>
      <div
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 border-2 rounded-lg py-3 cursor-pointer"
      >
        <FcGoogle size={25} />
        <span className="font-bold">Login With Google</span>
      </div>
    </div>
  );
};

export default SocialLogin;
