import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/auth/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const { createUser, setLoading, profileUpdate } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const handleRegisterForm = (data) => {
    const name = data.firstName + " " + data.lastName;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    // console.log(newUser);
    // Register wite firebase
    createUser(email, password)
      .then(result => {
        console.log(result?.user);
        if (result?.user) {
          const userInfo = { displayName: name, photoURL: photo };
          profileUpdate(userInfo)
            .then(() => {
              // Now save the user in db
              const newUser = {
                name, 
                email, 
                avatar: photo, 
                bio: '', 
                role: 'user', 
                followers: 0, 
                following: 0
              };
              // console.log(newUser);
              axiosPublic.post("/users", newUser)
                .then(res => {
                  // console.log(res.data);
                  if (res.data?.insertedId) {
                    reset();
                    toast.success('Your account created successfully');
                    navigate("/");
                  }
                })

            })
            .catch(err => console.log("profile update error: ", err?.code))

        }
      })
      .catch(err => {
        toast.error(err?.code);
        setLoading(false);
      })
  }

  return (
    <div className="my-10 w-11/12 lg:w-2/6 mx-auto border border-primary lg:p-3 rounded-lg">
      <h2 className="text-center text-2xl font-semibold">Create new account</h2>
      <SocialLogin />
      <div className="divider px-9">or</div>
      <div>
        <form onSubmit={handleSubmit(handleRegisterForm)} className="card-body space-y-3">
          {/* row 1 */}
          <div className="flex justify-between gap-2 w-full">
            <div className="form-control flex-1">
              <input {...register('firstName',
                { required: "This is required!" })}
                type="text"
                placeholder="First name"
                className="input input-bordered rounded-full w-full" />
              <p className="text-error pt-2">{errors.firstName?.message}</p>
            </div>
            <div className="form-control flex-1">
              <input {...register('lastName', { required: "This is required!" })} type="text" placeholder="Last name" className="input input-bordered rounded-full w-full" />
            </div>
          </div>
          {/* row 2 */}
          <div className="form-control">
            <input {...register('photo', { required: "This is required!" })} type="url" placeholder="Profile photo" className="input input-bordered rounded-full" />
            <p className="text-error pt-2">{errors.photo?.message}</p>
          </div>
          {/* row 3 */}
          <div className="form-control">
            <input {...register('email', { required: "This is required!" })} type="email" placeholder="Email address" className="input input-bordered rounded-full" />
            <p className="text-error pt-2">{errors.email?.message}</p>
          </div>
          {/* row 4 */}
          <div className="form-control">
            <input {...register('password', { required: "This is required!", minLength: 6 })} type="password" placeholder="**********" className="input input-bordered rounded-full" />
            <p className="text-error pt-2">{errors.password?.message}</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary text-white rounded-full hover:text-primary text-base">Register</button>
          </div>
        </form>
        <p className="text-center">Have an account ? please <Link className="text-primary font-semibold" to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;