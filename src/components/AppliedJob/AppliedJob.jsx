import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/LocalStroge";

const AppliedJob = () => {
  const datas = useLoaderData();
  const [jobApplied, setJobApplied] = useState([]);

  useEffect(() => {
    const storedJobId = getStoredApplication();
    if (datas.length > 0) {
      // const appliedjobs = [];
      // for(const id of storedJobId){
      //     const job = datas.find(job => job.id == id);
      //     if(job){
      //         appliedjobs.push(job);
      //     }
      // }
      // console.log(appliedjobs, storedJobId, datas);

      // another way
      const appliedJob = datas.filter((job) => storedJobId.includes(job.id));
      setJobApplied(appliedJob);
    }
  }, [datas]);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary text-center my-6">
        Applied jobs: {jobApplied.length}
      </h2>
      <div>
        {jobApplied.map((job) => (
          <div key={job.id} className="my-7 shadow-xl p-5">
            <div className="flex gap-5 items-center">
              <img className="w-44 h-28" src={job.logo} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{job.job_title}</h3>
                <p>{job.company_name}</p>
                <p>{job.remote_or_onsite}</p>
                <p>{job.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
