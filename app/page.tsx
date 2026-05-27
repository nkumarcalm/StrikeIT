'use client'

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/nextjs'

export default function Home() {
  const { isSignedIn } = useUser()

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold">StrikeIT</h1>

        <div>
          {!isSignedIn ? (
            <div className="flex gap-4">
              <SignInButton>
                <button className="border border-white px-4 py-2 rounded-full">
                  Login
                </button>
              </SignInButton>

              <SignUpButton>
                <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                  Register
                </button>
              </SignUpButton>
            </div>
          ) : (
            <UserButton />
          )}
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center mt-32 px-5">
        <h1 className="text-7xl font-bold max-w-5xl leading-tight">
          Welcome to StrikeIT
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-2xl">
          Lets Join us to Strike the world with your voice
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold">
            Start Posting
          </button>

          <button className="border border-white px-8 py-4 rounded-full">
            Explore Memos
          </button>
        </div>
      </section>
    </main>
  )
}