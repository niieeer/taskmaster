"use client";

import { signIn, signOut } from "next-auth/react"

export const LoginButton = () => {
    return (

        <button className="bg-gray-100 hover:bg-gray-600 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full" onClick={() => signIn("github")}>Sign in with Github</button>

    )
}

export const LogoutButton = () => {
    return (

        <button className="bg-gray-100 hover:bg-gray-600 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full" onClick={() => signOut()}>Logout</button>

    )
}