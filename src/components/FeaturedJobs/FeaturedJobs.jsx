import { useEffect, useState } from "react";
import JobDetails from "../JobDetais/JobDetails";

const FeaturedJobs = () => {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center my-5">
        <h2 className="text-5xl font-bold my-5">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {data.slice(0, dataLength).map((job) => (
          <JobDetails key={job.id} job={job}></JobDetails>
        ))}
      </div>
      <div
        className={`text-center my-7 ${dataLength === data.length && "hidden"}`}
      >
        <button
          onClick={() => setDataLength(data.length)}
          className="text-xl font-semibold text-white bg-primary px-7 py-4"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
