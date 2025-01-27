import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="bg-primary-700 h-dvh">
        <div className="sr-only">postSync | Onboarding</div>
        <div className="flex flex-col md:flex-row justify-end gap-4 h-full p-4">
          <div className="bg-white min-w-3/5 h-full rounded-2xl flex flex-col justify-center p-4">
            <Outlet />
          </div>
          <div className="text-white items-end hidden md:flex">
            <p>
              Welcome to PostSync, your all-in-one solution for effortless
              social media posting!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
