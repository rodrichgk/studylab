import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/logo/studylab_logo.svg"
        alt="Study Lab Logo"
        width={100}
        height={100}
      />
      <h1 className="text-6xl font-bold">Welcome to StudyLabs</h1>
      <p className="mt-3 text-2xl">A platform for learning and collaboration</p>

      <section className="mt-10 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold">Why Choose StudyLabs?</h2>
        <p className="mt-4 text-xl">
          StudyLabs provides a comprehensive suite of tools that help students
          and educators track and enhance their educational journey. From course
          management to real-time collaboration, discover how StudyLabs
          transforms learning.
        </p>
        <Button color="primary" className="mt-6">
          Learn More
        </Button>
      </section>

      <section className="my-16 w-full">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="group p-6 shadow-lg rounded-lg bg-white dark:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold">Real-Time Collaboration</h3>
            <p>
              Collaborate on projects and assignments in real-time, allowing for
              seamless teamwork regardless of location.
            </p>
          </div>
          <div className="group p-6 shadow-lg rounded-lg bg-white dark:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold">
              Integrated Learning Materials
            </h3>
            <p>
              Access a rich library of resources such as tutorials, lectures,
              and books tailored to your educational needs.
            </p>
          </div>
          <div className="group p-6 shadow-lg rounded-lg bg-white dark:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold">Tracking and Analytics</h3>
            <p>
              Monitor your progress with advanced tracking tools that help you
              understand your strengths and areas for improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 max-w-3xl">
        <h2 className="text-3xl text-center font-semibold">
          Hear From Our Users
        </h2>
        <div className="mt-8 px-6 py-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
          <p className="italic">
            "StudyLabs has revolutionized the way I manage my classes and
            interact with students. It's an indispensable tool for any educator
            looking to enhance their teaching methods and connect with their
            students more effectively." - Dr. Emily Watson
          </p>
        </div>
      </section>

      <footer className="w-full text-center border-t border-gray-300 py-8">
        <p>© 2024 StudyLabs, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
