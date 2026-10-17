import React from 'react';

export const SkeletonHero: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="h-6 w-48 bg-white/10 rounded-full animate-pulse" />
          <div className="h-16 w-3/4 bg-white/10 rounded-2xl animate-pulse" />
          <div className="h-12 w-1/2 bg-white/10 rounded-2xl animate-pulse" />
          <div className="h-20 w-full bg-white/5 rounded-2xl animate-pulse" />
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 bg-white/20 rounded-full animate-pulse" />
            <div className="h-12 w-48 bg-white/10 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md h-96 bg-zinc-900 border border-white/10 rounded-3xl animate-pulse p-8 flex flex-col justify-between">
            <div className="h-4 w-32 bg-white/10 rounded-full" />
            <div className="w-32 h-32 rounded-full bg-white/20 mx-auto" />
            <div className="space-y-3">
              <div className="h-10 w-full bg-white/5 rounded-xl" />
              <div className="h-10 w-full bg-white/5 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonPricing: React.FC = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-12">
        <div className="h-6 w-40 bg-zinc-200 dark:bg-zinc-800 rounded-full mx-auto animate-pulse" />
        <div className="h-12 w-72 bg-zinc-200 dark:bg-zinc-800 rounded-2xl mx-auto animate-pulse" />
        <div className="h-4 w-96 bg-zinc-100 dark:bg-zinc-900 rounded-full mx-auto animate-pulse" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`rounded-3xl p-8 border animate-pulse ${
              i === 2
                ? 'bg-zinc-900 border-zinc-700 h-96'
                : 'bg-white dark:bg-[#121215] border-zinc-200 dark:border-zinc-800 h-96'
            }`}
          >
            <div className="h-4 w-20 bg-zinc-300/40 dark:bg-zinc-700/40 rounded-full mb-6" />
            <div className="h-8 w-40 bg-zinc-300/40 dark:bg-zinc-700/40 rounded-xl mb-4" />
            <div className="h-10 w-32 bg-zinc-300/40 dark:bg-zinc-700/40 rounded-xl mb-8" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-zinc-200/40 dark:bg-zinc-800/60 rounded-full" />
              <div className="h-4 w-5/6 bg-zinc-200/40 dark:bg-zinc-800/60 rounded-full" />
              <div className="h-4 w-4/6 bg-zinc-200/40 dark:bg-zinc-800/60 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

