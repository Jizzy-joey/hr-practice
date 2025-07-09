"use client";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();
    const handleClick = () => {
        router.push("/success");
        // This will navigate back to the jobs page
    };
  return (
    <button
      className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      type="submit"
      onClick={handleClick}
    >
      Submit Application
    </button>
  )
}

