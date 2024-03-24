const getStoredApplication = () =>{
    const stroedApplication = localStorage.getItem('job-applications');
    if(stroedApplication){
        return JSON.parse(stroedApplication);
    }
    return [];
}

const saveApplication = id => {
    const storedApplications = getStoredApplication();
    const isExist = storedApplications.find(jobId => jobId == id);
    if(!isExist){
        storedApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedApplications))
    }
}

export {getStoredApplication, saveApplication}