"use client";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#030712]">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />
    </div>
  );
}