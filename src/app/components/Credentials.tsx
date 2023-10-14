export default function Credentials() {
  return (
    <form className="w-full flex flex-col gap-6">
      <div className="form-item">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your database username"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <span className="text-gray-400 text-xs">e.g potato</span>
      </div>

      <div className="form-item">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter database password"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <span className="text-gray-400 text-xs">e.g potato2021</span>
      </div>

      <div className="form-item">
        <label>Table/Collection Name</label>
        <input
          type="text"
          placeholder="Enter table or collection name"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <span className="text-gray-400 text-xs">e.g users</span>
      </div>
      <button className="bg-blue-500 text-white rounded-md p-2 w-8/12 mx-auto">
        Create Project
      </button>
    </form>
  );
}
