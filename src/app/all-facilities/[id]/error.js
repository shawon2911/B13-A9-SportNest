
"use client"

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="max-w-md text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-orange-100 rounded-full">
                        <AlertTriangle className="w-12 h-12 text-orange-400" />
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-gray-800 mb-3">
                    Oops! Something went wrong
                </h1>

                <p className="text-gray-600 mb-8">
                    An unexpected error occurred while loading this page.
                    Please try again or return to the homepage.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 rounded-xl bg-orange-400 text-white font-medium hover:bg-orange-500 transition"
                    >
                        Try Again
                    </button>

                    <Link
                        href={"/"}
                        className="px-6 py-3 rounded-xl border border-orange-400 text-orange-400 font-medium hover:bg-orange-50 transition"
                    >
                        Go Home
                    </Link>
                </div>

                <div className="mt-8 flex justify-center">
                    <div className="h-1 w-20 bg-orange-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Error;