import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const AddDestination = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { user } = useAuth();
  const authorName = user?.displayName;
  const authorEmail = user?.email;
  const authorImage = user?.photoURL;

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      likes: 0,
      reviews: [],
      ratings: 0,
    }
  });

  const handleFormSubmit = (data) => {
    const newDestination = { ...data, authorName, authorEmail, authorImage }

    // Add to database
    axiosPublic.post("/destinations", newDestination)
      .then(res => {
        // console.log(res.data);
        if (res.data?.insertedId) {
          toast.success('New destination added successfully');
          navigate("/dashboard/manage-destinations");
          reset();
        }
      })
      .catch(err => { console.log("destination added error: ", err?.code) })
  };

  return (
    <div className='my-10'>
      <Helmet>
        <title>Add Destination | LetsTravel</title>
      </Helmet>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md shadow-primary">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add new Destination</h2>

        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            id="title"
            {...register('title')}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter destination title"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
        </div>

        {/* Destination Field */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
          <input
            id="location"
            {...register('location')}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Where destination is?"
          />
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>}
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            id="description"
            {...register('description')}
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Provide descripton..."
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        {/* Image URL Field */}
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">Image URL</label>
          <input
            id="imageUrl"
            type='url'
            {...register('imageUrl')}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
          />
          {errors.imageUrl && <p className="mt-1 text-sm text-red-600">{errors.imageUrl.message}</p>}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-black hover:text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDestination;