import { TiTick } from "react-icons/ti";

export default function SuccessPage() {
return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 text-center border-4 border-black bg-slate-300 p-8 rounded-lg shadow-lg">
        <TiTick className="text-green-500" />
        <h1 className="text-3xl font-bold text-black">Success</h1>
        <p className="text-black">Your changes have been saved successfully!<br /> Your application has been submitted for review. 
        L</p>
    </div>
)
}
