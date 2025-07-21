import { Link } from 'react-router-dom';

export default function AddCoffee() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center px-4 py-8">
      {/* Back Link */}
      <div className="w-full max-w-4xl mb-4">
        <Link to="/" className="flex items-center gap-2 text-primary hover:underline">
          <span className="text-xl">←</span> Back to home
        </Link>
      </div>

      {/* Card Container */}
      <div className="bg-base-100 shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-2">Add New Coffee</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem Ipsum
          is that it has a more-or-less normal distribution of letters, as opposed to
          using Content here.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="btn btn-block bg-[#D2B48C] text-black hover:bg-[#caa474]"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
