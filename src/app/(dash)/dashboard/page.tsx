import { Avatar, Button, Input } from "@nextui-org/react";
import {
  Bell,
  CalendarDays,
  MessageCircleMore,
  Search,
  User,
} from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="container my-auto h-full">
      <section className="flex items-center justify-between rounded-lg w-full mb-8">
        <div className="flex items-center space-x-4 mr-96">
          <Avatar
            icon={<User className="w-8 h-8 text-gray-800" />}
            className="w-12 h-12"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Hello</h2>
            <p className="text-gray-600">Sajibur Rahman</p>
          </div>
        </div>

        <div className="flex-grow mx-4">
          <Input
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <Search className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="flex items-center space-x-6">
          <Button
            isIconOnly
            color="primary"
            variant="faded"
            aria-label="Take a photo"
          >
            <CalendarDays />
          </Button>
          <Button
            isIconOnly
            color="primary"
            variant="faded"
            aria-label="Take a photo"
          >
            <MessageCircleMore />
          </Button>
          <Button
            isIconOnly
            color="primary"
            variant="faded"
            aria-label="Take a photo"
          >
            <Bell />
          </Button>
        </div>
      </section>

      <section className="performance-overview grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 h-1/3">
        <div className="p-4 bg-gradient-to-r from-blue-200 to-blue-400 rounded-3xl shadow-md">
          <h3 className="text-xl font-semibold">Attendance Overview</h3>
        </div>
        <div className="p-4 bg-gradient-to-r from-green-200 to-green-400 rounded-3xl shadow-md">
          <h3 className="text-xl font-semibold">Grade Trends</h3>
        </div>
        <div className="p-4 bg-gradient-to-r from-purple-200 to-purple-400 rounded-3xl shadow-md">
          <h3 className="text-xl font-semibold">Library Usage</h3>
        </div>
      </section>

      <section className="tasks mb-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl">Tasks</h2>
      </section>

      <section className="quick-links mb-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl">Quick Links</h2>
      </section>

      <section className="reports mb-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl">Generate Reports</h2>
      </section>

      <section className="community mb-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl">Community Board</h2>
      </section>
    </div>
  );
};

export default Dashboard;
