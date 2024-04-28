import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/logo/studylab_logo.svg"
        alt="Study Lab Logo"
        className="h-20"
        width={100}
        height={100}
      />
      <h1 className="text-6xl font-bold">Welcome to StudyLabs</h1>
      <p className="mt-3 text-2xl">A platform for learning and collaboration</p>
    </div>
  );
}
