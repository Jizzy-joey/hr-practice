import Link from "next/link";
export default function Categories({jobs}) {

    const categories = [...new Set((jobs ?? []).map(job => job.category))];
    return(
        <nav>
            <ul className="flex flex-col space-y-2 bg-slate-100 p-4 rounded-lg shadow-md text-lg">
                {categories.map((category, index) => (
                    <li key={index} className="p-2 hover:bg-slate-200 hover:text-xl transition-all duration-300">
                        <Link href={`/jobs/category/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )

}