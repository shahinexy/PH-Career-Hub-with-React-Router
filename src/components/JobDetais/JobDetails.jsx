import { Link } from "react-router-dom";

const JobDetails = ({ job }) => {
  return (
    <div>
      <div className="border-[1px] border-gray-400  shadow-lg p-5 space-y-5">
        <img className="h-16" src={job.logo} alt="" />
        <h3 className="text-xl font-semibold">{job.job_title}</h3>
        <p>{job.company_name}</p>
        <div>
          <button className="btn border-[2px] border-primary">
            {job.remote_or_onsite}
          </button>
          <button className="btn ml-5 border-[2px] border-primary">
            {job.job_type}
          </button>
        </div>
        <div className="flex gap-5">
          <p>{job.location}</p>
          <p>Salary {job.salary}</p>
        </div>
        <Link to={`/job/${job.id}`}>
        <button className="text-xl font-semibold bg-primary px-5 py-2 text-white">
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
