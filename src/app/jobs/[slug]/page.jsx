import Button from "@/app/component/Button";
import SavesButton from "@/app/component/SavesButton";
import jobs from "@/app/data/jobs";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineEditNote } from "react-icons/md";
// import { IoMdArrowBack } from "react-icons/io";
export default async function jobDescription({ params }) {

    const { slug } = await params;
    // Convert slug to lowercase and replace spaces with hyphens for matching


    const jobDetails = jobs.find(job =>
         job.title.toLocaleLowerCase().replace(/\s+/g, '-') === slug);

         const jobRelated = [...jobs.filter(job => (job.category === jobDetails.category &&
          job.title.toLocaleLowerCase().replace(/\s+/g, '-') !== slug) || job.location === jobDetails.location &&
          job.title.toLocaleLowerCase().replace(/\s+/g, '-') !== slug)].sort(() => 0.5 - Math.random());
         
    return(
       <div className="flex flex-col items-start justify-center p-4 w-4/5 m-auto">
       
        <h1 className="font-bold text-5xl py-4 border-double
         border-slate-950 border-b-4">{jobDetails.title}
            <p className={`text-2xl font-semibold
             text-white px-4 py-2 rounded-lg flex justify-between
                ${Math.ceil((new Date(jobDetails.endDate)
                 - new Date()) / (1000 * 60 * 60 * 24)) < 4 ?
                  'bg-red-500 animate-pulse' : 'bg-blue-900'}`}>
                    {Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)) < 0
                        ? 'Expired'
                        : 'Days Left: ' + Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24))}
                </p>

        </h1>

        <h2>{jobDetails.company}</h2>
        <h3>{jobDetails.location}</h3>
        <p>{jobDetails.category}</p>
        <Image src={`/${jobDetails.id !== null ? jobDetails.id : 'hire'}.jpg`}
         alt={jobDetails.title} width={500} height={300} />

         <section>
            <h2 className="capitalize text-3xl font-bold">Job Description</h2>

            <p className="text-lg text-slate-700">{jobDetails.description}</p>
         </section>

         <section>
            <h2 className="capitalize text-3xl font-bold">Requirements</h2>
            <ul className="list-disc pl-5">
               {jobDetails.requirements.map((req, index) => (
                  <li key={index} className="text-lg text-slate-700">{req}
                  <span></span></li>
               ))}
            </ul>
         </section>

            <section>
               <Link href={`/apply/${jobDetails.title.toLocaleLowerCase().replace(/\s+/g, '-')}`}>
                   <input type="button" value={`${Math.ceil((new Date(jobDetails.endDate) - 
                   new Date()) / (1000 * 60 * 60 * 24))} days left - Apply Now`}       
                   className="bg-black text-white px-4 py-2 rounded-md
                   hover:bg-blue-900 transition-all duration-300 cursor-pointer
                   flex items-center justify-center space-x-2"/>
               </Link>
               {
                  new Date(jobDetails.endDate) > new Date() &&
                  <SavesButton title={jobDetails.title} company={jobDetails.company} />
               }

            </section>

            <section>
                <h2 className="capitalize text-3xl font-bold">Related Jobs</h2>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                   {jobRelated.map((job) => (
                       <Link key={job.id} href={`/jobs/${job.title.toLocaleLowerCase().replace(/\s+/g, '-')}`}
                       className="flex flex-col items-start justify-center
                        p-4 bg-black rounded-lg shadow-md hover:bg-blue-900 transition-all duration-300">
                           <h3 className="text-lg text-slate-100 hover:underline">{job.title}</h3>
                            <p className="text-sm text-slate-100">{job.company}</p>
                            <p className="text-sm text-slate-100">{job.location}</p>
                            <p className="text-sm text-slate-100">{job.category}</p>
                       </Link>
                   ))}
               </div>
            </section>
       </div>
    )
}