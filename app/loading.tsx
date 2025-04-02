import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center text-gray-400 space-y-6">
        <div className="relative">
          <Loader className="animate-spin h-12 w-12" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 bg-gray-400 rounded-full animate-pulse" />
          </div>
        </div>
        <p className="animate-pulse">Please wait, page is loading...</p>
      </div>
    </div>
  );
}
