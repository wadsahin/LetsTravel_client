import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const AddBlogPost = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const [user] = useUser();

  // Author info
  const authorName = user?.name;
  const authorEmail = user?.email;
  const authorPhoto = user?.avatar ? user?.avatar : "https://img.icons8.com/?size=100&id=7WwZau6gMj6x&format=png&color=000000";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset } = useForm();


  const handleFormSubmit = (data) => {
    const story = {
      likes: 0,
      isLiked: false,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      comments: [],
      author: {
        id: `a${Math.floor(Math.random() * 1000)}`, // Generate random author ID
        name: authorName,
        email: authorEmail,
        avatar: authorPhoto,
        isFollowed: false,
        followers: 0
      }
    }
    const newStory = { ...story, ...data };
    console.log(newStory);
    // ----------- Add to database------------------
    axiosPublic.post("/stories", newStory)
      .then(res => {
        // console.log(res.data);
        if (res.data?.insertedId) {
          toast.success('Your story shared successfully');
          navigate("/stories");
          reset();
        }
      })
      .catch(err => {
        console.log("add-blog-post error: ", err?.code)
      })

  };

  return (
    <div className='my-10'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md shadow-primary">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Post</h2>

        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            id="title"
            {...register('title')}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter post title"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
        </div>

        {/* Destination Field */}
        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">Destination</label>
          <input
            id="destination"
            {...register('destination')}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Where did you go?"
          />
          {errors.destination && <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>}
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            id="description"
            {...register('description')}
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Share your experience..."
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        {/* Image URL Field */}
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">Image URL</label>
          <input
            id="imageUrl"
            {...register('imageUrl')}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
          />
          {errors.imageUrl && <p className="mt-1 text-sm text-red-600">{errors.imageUrl.message}</p>}
        </div>

        {/* Author Section */}
        <div className="mb-6 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Author Information</h3>

          {/* Author Name */}
          <div className="mb-4">
            <label htmlFor="author.name" className="block text-gray-700 font-medium mb-2">Author Name</label>
            <input
              id="author.name"
              // {...register('author.name')}
              defaultValue={user?.name}
              readOnly
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              placeholder="Your name"
            />
            {errors.author?.name && <p className="mt-1 text-sm text-red-600">{errors.author.name.message}</p>}
          </div>

          {/* Author email */}
          <div className="mb-4">
            <label htmlFor="author.email" className="block text-gray-700 font-medium mb-2">Author Email</label>
            <input
              id="author.email"
              defaultValue={user?.email}
              readOnly
              // {...register('author.email')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              placeholder="https://example.com/email.jpg"
            />
            {errors.author?.email && <p className="mt-1 text-sm text-red-600">{errors.author.email.message}</p>}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-black hover:text-white"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogPost;