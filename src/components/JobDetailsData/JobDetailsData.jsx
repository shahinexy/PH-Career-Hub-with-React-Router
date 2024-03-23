import { useLoaderData, useParams } from "react-router-dom";


const JobDetailsData = () => {
    const jobData = useLoaderData();
    const {jobId} = useParams();
    const jobInt = parseInt(jobId)
    const job = jobData.find(job => job.id === jobInt)
    console.log(job);
    return (
        <div>
            <div className="md:flex gap-7">
                <div className="md:w-8/12">
                    <p><span className="font-bold">Job Description:</span> {job.job_description}</p>
                    <p className="my-7"><span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <p className="my-7"><span className="font-bold">Educational Requirements:</span> {job.educational_requirements}</p>
                    <p className="my-7"><span className="font-bold">Experiences:</span> {job.experiences}</p>
                </div>
                <div className="md:w-4/12">
                    <div className="bg-purple-100 p-5 w-full space-y-3">
                        <h2 className="text-2xl font-semibold">Job Details</h2>
                        <hr />
                        <p><span className="font-semibold">Satary:</span> {job.salary}</p>
                        <p><span className="font-semibold">Job Title:</span> {job.job_title}</p>
                        <h2 className="text-2xl font-semibold">Contact Information</h2>
                        <hr />
                        <p><span className="font-semibold">Phone:</span> {job.contact_information.phone}</p>
                        <p><span className="font-semibold">Email:</span> {job.contact_information.email}</p>
                        <p><span className="font-semibold">Address:</span> {job.contact_information.address}</p>
                    </div>
                    <button className="w-full bg-primary py-3 my-5 text-xl font-semibold text-white">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsData;