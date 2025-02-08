import React from 'react';

export default function SkeletonLoader () {
  return (
    <div className="space-y-4">
      <div className="h-6 bg-gray-300 dark:bg-gray-600 animate-pulse rounded w-2/3"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-600 animate-pulse rounded w-1/3"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-600 animate-pulse rounded w-1/2"></div>
    </div>
  );
};

