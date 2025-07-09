import Button from '@/app/component/Button';
import jobs from '@/app/data/jobs.js'
export default function JobCategory({params}) {
  const filteredJobs = jobs.filter(job => job.category.replace(/\s+/g, '-').toLowerCase() === params.cat);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
     
     {
        filteredJobs.map((job) => (
            <section key={job.id} className="p-4 m-4 bg-gray-100 rounded-lg shadow-md border border-gray-700">
                <h2 className="text-4xl font-bold ">{job.title}</h2>
                <p className="text-lg text-slate-700 border-2 border-gray-700">Company: {job.company}</p>
                <p className="text-lg text-slate-700 border-2 border-gray-700">Location: {job.location}</p>
                <p className="text-lg text-slate-700 border-2 border-gray-700">Category: {job.category}</p>
                <p className="text-lg text-slate-700 border-2 border-gray-700">Description: {job.description}</p>
                <p className="text-lg text-slate-700 border-2 border-gray-700">End Date: {new Date(job.endDate).toLocaleDateString()}</p>
                <p className="text-lg text-slate-700 border-2 border-gray-700">Posted On: {new Date(job.postedOn).toLocaleDateString()}</p>
                <p className="text-lg text-slate-700 border-2 border-gray-700">Salary: 500k per month {job.salary}</p>
                <p className="text-lg text-slate-700 border-2 border-gray-700">Experience: 2years {job.experience}</p>
                <p className="text-lg text-slate-700 border-2 border-gray-700">Requirements: {job.requirements.join(', ')}</p> <Button  title={job.title} />

            </section>

     ))}
    </div>
  )
}
// This file is a placeholder for the job category page.    