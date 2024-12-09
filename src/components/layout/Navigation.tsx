import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              CodeskLab Hackathon
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}; 