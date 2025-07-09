import Link from "next/link";
export default function Categories({jobs}) {

    const categories = [...new Set(jobs.map(job => job.category))];
    return(
        <nav>
            <ul className="flex flex-row space-x-4 bg-black p-4  shadow-md text-lg text-amber-50 flex-wrap justify-center">
                {categories.map((category, index) => (
                    <li key={index} className="p-2 hover:bg-gray-800 hover:text-xl transition-all duration-300">
                        <Link href={`/jobs/category/${category.replaceAll(/\s+/g, '-').toLowerCase()}`}>
                        {category}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )

}