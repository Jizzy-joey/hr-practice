import Link from 'next/link';

export default function NavData() {
    return (
        <>
        <li></li>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/jobs">Jobs</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            <li>
                <Link href="/dashboard">dashboard</Link>
            </li>
        </>
    );
}