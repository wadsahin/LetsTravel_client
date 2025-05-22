import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddNewTrip = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const handleAddNewTrip = (data) => {
    // const [trip, setTrip] = useState();
    // const [destination, setDestination] = useState();

    const title = data?.title;
    const picture = data?.picture;
    const description = data?.description;
    const amount = data?.amount;
    const startDate = data?.startDate;
    const endDate = data?.endDate;
    const destination = data?.destination;
    const notes = data?.notes;

    const newTrip = {
      hostName: user?.displayName,
      hostEmail: user?.email,
      picture,
      title,
      desc: description,
      amount,
      startDate,
      endDate,
      createdAt: Date.now(),
      destination,
      notes,
    }
    console.log(newTrip);

    //------------------- Add to database -------------------------
    axiosPublic.post("/trips", newTrip)
      .then(res => {
        // console.log(res.data);
        if (res.data?.insertedId) {
          toast.success('A new trip added successfully');
          navigate("/dashboard/manage-trips");
          reset();
        }
      })
      .catch(err => { console.log("add new trip error: ", err?.code) })

  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-1/2 mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center pt-3">Add new Trip</h2>
        <form onSubmit={handleSubmit(handleAddNewTrip)} className="card-body space-y-3">
          {/* row 1 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Trip title</span>
            </label>
            <input
              {...register("title", { required: "title must filled!" })}
              type="title"
              placeholder="Trip title"
              className="input input-bordered" />
            <p className="text-error pt-2">{errors.title?.message}</p>
          </div>
          {/* row 1.2 || image */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture</span>
            </label>
            <input
              {...register("picture", { required: "picture url must filled!" })}
              type="url"
              placeholder="Trip picture url"
              className="input input-bordered" />
            <p className="text-error pt-2">{errors.title?.message}</p>
          </div>
          {/* row 2 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Descripton</span>
            </label>
            <textarea
              rows={6}
              {...register("description", { required: "description must filled!", minLength: 6 })}
              type="description"
              placeholder="Descripton"
              className="border border-gray-300 rounded-md p-2"
            >
            </textarea>
            <p className="text-error pt-2">{errors.description?.message}</p>
          </div>
          {/* row 3 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Trip fee</span>
            </label>
            <input
              {...register("amount", { required: "amount must filled!" })}
              type="number"
              placeholder="Trip fee"
              className="input input-bordered" />
            <p className="text-error pt-2">{errors.amount?.message}</p>
          </div>
          {/* row 4 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Destination</span>
            </label>
            <input
              {...register("destination", { required: "Destination must filled!" })}
              type="text"
              placeholder="Destination"
              className="input input-bordered" />
            <p className="text-error pt-2">{errors.destination?.message}</p>
          </div>
          {/* row 5 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Notes</span>
            </label>
            <input
              {...register("notes", { required: "notes must filled!" })}
              type="text"
              placeholder="Notes"
              className="input input-bordered" />
            <p className="text-error pt-2">{errors.notes?.message}</p>
          </div>

          {/* row 4 */}
          <div className="flex justify-between">
            {/* start time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Start Date</span>
              </label>
              <input
                {...register("startDate", { required: "startDate must filled!" })}
                type="date"
                className="input input-bordered" />
              <p className="text-error pt-2">{errors.startDate?.message}</p>
            </div>
            {/* end time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">End Date</span>
              </label>
              <input
                {...register("endDate", { required: "endDate must filled!" })}
                type="date"
                className="input input-bordered" />
              <p className="text-error pt-2">{errors.endDate?.message}</p>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-primary text-white hover:text-primary text-base">Add Trip</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTrip;