import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result.user);
        if (result?.user) {
          const loggedUser = result?.user;
          const newUser = {
            name: loggedUser?.displayName || "Anonymous",
            email: loggedUser?.email,
            avatar: loggedUser?.photoURL,
            bio: '',
            role: 'user',
            followers: 0,
            following: 0
          };
          console.log("from social login:", newUser);
          // Save user into db
          axiosPublic.post("/users", newUser)
            .then(res => {
              // console.log(res.data);
              if (res.data?.insertedId) {
                toast.success('Your account created successfully');
                navigate("/");
              }
            })

        }
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