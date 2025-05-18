import { Link } from "react-router-dom";
import SocialLogin from "../../components/auth/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  console.log(errors)

  const handleRegisterForm = (data) => {
    const name = data.firstName + " " + data.lastName;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    const newUser = { name, email, password, photo };
    console.log(newUser);
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
                { required: true, message: "This field is required!" })} 
                type="text" 
                placeholder="First name" 
                className="input input-bordered rounded-full w-full" />
              {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
            </div>
            <div className="form-control flex-1">
              <input {...register('lastName', { required: true })} type="text" placeholder="Last name" className="input input-bordered rounded-full w-full" />
            </div>
          </div>
          {/* row 2 */}
          <div className="form-control">
            <input {...register('photo', { required: true })} type="text" placeholder="Profile photo" className="input input-bordered rounded-full" />
          </div>
          {/* row 3 */}
          <div className="form-control">
            <input {...register('email', { required: true })} type="email" placeholder="Email address" className="input input-bordered rounded-full" />
          </div>
          {/* row 4 */}
          <div className="form-control">
            <input {...register('password', { required: true, minLength: 6 })} type="password" placeholder="**********" className="input input-bordered rounded-full" />
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