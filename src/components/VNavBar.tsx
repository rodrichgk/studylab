import {
  BadgeEuro,
  Gauge,
  GraduationCap,
  LibraryBig,
  School,
  Speech,
  SquareActivity,
  UserRoundPlus,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const VNavBar = () => {
  const buttons = [
    { name: "dashboard", icon: <Gauge />, label: "Dashboard" },
    { name: "students", icon: <Users />, label: "Student Management" },
    { name: "academics", icon: <Wrench />, label: "Academic Tools" },
    { name: "grades", icon: <GraduationCap />, label: "Grade Tracking" },
    { name: "finances", icon: <BadgeEuro />, label: "Finance Management" },
    { name: "hr", icon: <UserRoundPlus />, label: "HR Management" },
    {
      name: "library",
      icon: <LibraryBig />,
      label: "Library & Resources Management",
    },
    { name: "facilities", icon: <School />, label: "Facilities & Events" },
    { name: "communication", icon: <Speech />, label: "Communication Center" },
    {
      name: "health-transport",
      icon: <SquareActivity />,
      label: "Health & Transport",
    },
  ];

  return (
    <div className="flex md:flex-col bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg backdrop-saturate-150 border border-gray-200 dark:border-gray-800 rounded-3xl fixed inset-x-0 bottom-2 mx-2 md:inset-x-auto md:top-0 md:bottom-auto md:relative md:ml-10">
      <ul className="flex md:flex-col p-5 space-y-8 justify-start items-center w-full">
        {buttons.map((button, index) => (
          <li key={index} className="group focus:outline-none relative">
            <Link
              className="flex flex-col items-center space-y-1"
              href={`/${button.name}`}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-lg">
                {button.icon}
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute left-full top-1/2 transform -translate-y-1/2 ml-2 w-auto bg-gray-400 text-black text-center text-xs rounded-lg py-1 px-2">
                {button.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VNavBar;
