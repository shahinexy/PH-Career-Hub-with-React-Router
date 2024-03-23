

const JobDetails = ({job}) => {

    return (
        <div>
            <div className="border-[1px] border-gray-400  shadow-lg p-5 space-y-5">
                <img className="h-16" src={job.logo} alt="" />
                <h3 className="text-xl font-semibold">{job.job_title}</h3>
                <p>{job.company_name}</p>
                <div>
                    <button>{job.job_type}</button>
                    <button> btn 2</button>
                </div>
                <div>
                    <p>{job.location}</p>
                    <p>Salary {job.salary}</p>
                </div>
                <button className="text-xl font-semibold bg-primary px-5 py-2 text-white">View Details</button>
            </div>
        </div>
    );
};

export default JobDetails;