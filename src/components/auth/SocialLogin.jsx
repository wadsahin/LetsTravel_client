import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result.user);
      })
      .catch(err => {
        console.log(err.code)
      })
  }
  return (
    <div className="my-5 text-center px-9">
      <button onClick={handleGoogleLogin} className="btn btn-outline border-gray-300 rounded-full w-full"><FcGoogle size={24} /><span>Continue with google</span></button>
    </div>
  );
};

export default SocialLogin;