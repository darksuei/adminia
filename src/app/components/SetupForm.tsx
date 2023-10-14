import MySql from "../../assets/mysql.svg";
import PostgreSql from "../../assets/postgresql.svg";
import MongoDb from "../../assets/mongodb.svg";
import Image from "next/image";

export default function SetUpForm() {
  return (
    <form className="w-full flex flex-col gap-6">
      <div className="form-item">
        <label>Project Name</label>
        <input
          type="text"
          placeholder="Prefferrably a unique name"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <span className="text-gray-400 text-xs">e.g White Hat</span>
      </div>

      <div className="form-item">
        <label>Database Connection String or Url</label>
        <input
          type="text"
          placeholder="Enter database connection string"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <span className="text-gray-400 text-xs">
          e.g mongodb://happyboy:123@myserver.com
        </span>
      </div>
      <div className="form-item">
        <label>Database System</label>
        <div className="form-min-item">
          <div className="w-2/12 h-20 border p-4 rounded-lg">
            <Image src={MySql} alt="mysql" quality={100} className="m-auto" />
          </div>
          <div className="w-2/12 h-20 border p-4 rounded-md">
            <Image
              src={PostgreSql}
              alt="postgresql"
              quality={100}
              className="m-auto"
            />
          </div>
          <div className="w-2/12 h-20 border p-4 rounded-md">
            <Image
              src={MongoDb}
              alt="mongodb"
              quality={100}
              className="m-auto"
            />
          </div>
        </div>
      </div>
      <button className="bg-blue-500 text-white rounded-md p-2 w-8/12 mx-auto">
        Create Project
      </button>
    </form>
  );
}
