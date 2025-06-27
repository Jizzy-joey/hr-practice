module.exports = {

"[project]/.next-internal/server/app/jobs/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/data/jobs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        category: "Frontend",
        company: "TechNova Inc.",
        location: "Remote",
        description: "We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS.",
        requirements: [
            "3+ years of experience",
            "Strong JavaScript and React skills",
            "Familiarity with version control (Git)"
        ],
        postedAt: "2025-06-20",
        endDate: "2025-07-20"
    },
    {
        id: 2,
        title: "Backend Engineer",
        category: "Backend",
        company: "ByteWorks",
        location: "Lagos, Nigeria",
        description: "Build and maintain scalable backend systems using Node.js and Express.",
        requirements: [
            "Experience with REST APIs",
            "Database management skills (MongoDB or PostgreSQL)",
            "Knowledge of authentication and authorization"
        ],
        postedAt: "2025-06-18",
        endDate: "2025-07-18"
    },
    {
        id: 3,
        title: "Cybersecurity Analyst",
        category: "Cybersecurity",
        company: "SecureLink",
        location: "Remote",
        description: "Monitor and defend systems against security breaches and cyber threats.",
        requirements: [
            "Understanding of firewalls, VPNs, IDS/IPS",
            "Experience with incident response",
            "Security certifications are a plus"
        ],
        postedAt: "2025-06-15",
        endDate: "2025-07-15"
    },
    {
        id: 4,
        title: "Product Designer",
        category: "Product Design",
        company: "CreateLab",
        location: "Abuja, Nigeria",
        description: "Work closely with product managers and engineers to design user-centric interfaces.",
        requirements: [
            "Proficiency in Figma/Sketch",
            "Strong understanding of UX principles",
            "Portfolio of past design work"
        ],
        postedAt: "2025-06-10",
        endDate: "2025-07-10"
    },
    {
        id: 5,
        title: "Project Manager",
        category: "Project Management",
        company: "AgileTeams Ltd.",
        location: "Hybrid - Lagos",
        description: "Lead cross-functional teams to deliver projects on time and within scope.",
        requirements: [
            "Proven experience managing software projects",
            "Excellent communication and organizational skills",
            "Familiarity with Agile methodologies"
        ],
        postedAt: "2025-06-12",
        endDate: "2025-07-12"
    },
    {
        id: 6,
        title: "Fullstack Developer",
        category: "Fullstack",
        company: "DevSphere",
        location: "Remote",
        description: "Join our engineering team to build end-to-end web applications.",
        requirements: [
            "Good knowledge of both frontend (React) and backend (Node.js)",
            "Experience working with APIs and databases",
            "Understanding of deployment workflows"
        ],
        postedAt: "2025-06-14",
        endDate: "2025-07-14"
    }
];
const __TURBOPACK__default__export__ = jobs;
}}),
"[project]/src/app/jobs/[slug]/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>jobDescription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$jobs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/jobs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function jobDescription({ params }) {
    const { slug } = await params;
    // Convert slug to lowercase and replace spaces with hyphens for matching
    const jobDetails = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$jobs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find((job)=>job.title.toLocaleLowerCase().replace(/\s+/g, '-') === slug);
    const jobRelated = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$jobs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filter((job)=>job.category === jobDetails.category && job.title.toLocaleLowerCase().replace(/\s+/g, '-') !== slug || job.location === jobDetails.location && job.title.toLocaleLowerCase().replace(/\s+/g, '-') !== slug)
    ].sort(()=>0.5 - Math.random());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start justify-center p-4 w-4/5 m-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-5xl py-4 border-double border-slate-950 border-b-4",
                children: [
                    jobDetails.title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-2xl font-semibold
             text-white px-4 py-2 rounded-lg flex justify-between
                ${Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)) < 4 ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`,
                        children: [
                            Math.ceil((new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)),
                            " days left"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: jobDetails.company
            }, void 0, false, {
                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: jobDetails.location
            }, void 0, false, {
                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: jobDetails.category
            }, void 0, false, {
                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: `/${jobDetails.id !== null ? jobDetails.id : 'hire'}.jpg`,
                alt: jobDetails.title,
                width: 500,
                height: 300
            }, void 0, false, {
                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "capitalize text-3xl font-bold",
                        children: "Job Description"
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-slate-700",
                        children: jobDetails.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                lineNumber: 41,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "capitalize text-3xl font-bold",
                        children: "Requirements"
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc pl-5",
                        children: jobDetails.requirements.map((req, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-lg text-slate-700",
                                children: [
                                    req,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                                lineNumber: 51,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                lineNumber: 47,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/apply/${jobDetails.title.toLocaleLowerCase().replace(/\s+/g, '-')}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "button",
                        value: "Apply Now",
                        className: "bg-slate-950 text-white px-4 py-2 rounded-md hover:bg-slate-600 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                        lineNumber: 59,
                        columnNumber: 20
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                    lineNumber: 58,
                    columnNumber: 16
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "capitalize text-3xl font-bold",
                        children: "Related Jobs"
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",
                        children: jobRelated.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/jobs/${job.title.toLocaleLowerCase().replace(/\s+/g, '-')}`,
                                className: "flex flex-col items-start justify-center p-4 bg-slate-100 rounded-lg shadow-md hover:bg-slate-200 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg text-slate-900 hover:underline",
                                        children: job.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                                        lineNumber: 74,
                                        columnNumber: 28
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-600",
                                        children: job.company
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-600",
                                        children: job.location
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-600",
                                        children: job.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, job.id, true, {
                                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                                lineNumber: 71,
                                columnNumber: 24
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                        lineNumber: 69,
                        columnNumber: 16
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/jobs/[slug]/page.jsx",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/jobs/[slug]/page.jsx",
        lineNumber: 20,
        columnNumber: 8
    }, this);
}
}}),
"[project]/src/app/jobs/[slug]/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/jobs/[slug]/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_5b0c853e._.js.map