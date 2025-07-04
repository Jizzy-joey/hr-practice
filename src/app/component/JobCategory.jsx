import JobCard from "./JobCard"

export default function JobCategory() {
    return (
        <section className="md:py-16 md:px-8 py-4 px-2">
            <h2 className="md:text-3xl text-lg font-bold uppercase py-4 my-5
            border-b-8 w-fit border-b-blue-900">Top Job Available</h2>
            <div>
                <JobCard val='6'/>
            </div>
        </section>
    )
}