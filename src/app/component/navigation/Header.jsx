export default function Header() {
    return(
        <header className="flex flex-col items-center justify-center bg-slate-950/40
        animate-pulse">
            <h1 className="uppercase text-slate-900 md:text-7xl text-2xl md:p-8 p-4
            text-center">
                HR Platform
                </h1>
            <p className="md:text-3xl text-lg capitalize text-slate-100">Your one-stop solution for all HR needs</p>
        </header>
    )
}