import React, {useLayoutEffect} from 'react'

export default function NotFound() {
    useLayoutEffect(() => {
        document.title = "404 Not Found"
        const timer = setTimeout(() => {
            // window.location.replace("https://google.com");
            window.location.href = "/";

        }, 2000)
        return () => clearTimeout(timer)
    }, [])


    return (
        <div className={"min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center text-3xl font-bold text-slate-500 dark:text-slate-400"}>Invalid URL. Redirecting...</div>
    )
}
