'use client';

import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, isLoading } = useUser();

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center text-center">
      {isLoading && <p>Loading...</p>}

      {!isLoading && !user && (
        <>
          <h1 className="text-5xl text-black font-semibold">Welcome</h1>
          <a
            href="/auth/login"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md font-bold"
          >
            Login
          </a>
        </>
      )}

      {!isLoading && user && (
        <>
          
          <h2 className="text-2xl text-black font-semibold mt-2 mb-4">User : {user.name}</h2>
          <p className="text-gray-600 mb-2">Email : {user.email}</p>
          <a
            href="/auth/logout"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md font-bold"
          >
            Logout
          </a>
        </>
      )}
    </div>
  );
}
