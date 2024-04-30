import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Textarea,
  Input,
} from "@nextui-org/react";
import { Search } from "lucide-react";

interface Integration {
  id: string;
  title: string;
  description: string;
  icon: string; // URL to the icon image
}

const integrationsData: Integration[] = [
  {
    id: "classroom-tools",
    title: "Google Classroom",
    description:
      "Seamlessly integrate with Google Classroom to manage your classes and assignments.",
    icon: "/icons/google-classroom.png",
  },
  {
    id: "communication-platforms",
    title: "Slack",
    description:
      "Direct integration with Slack allows for better communication within educational environments.",
    icon: "/icons/slack.svg",
  },
  {
    id: "video-conferencing",
    title: "Zoom",
    description:
      "Connect your Zoom account to easily schedule and host virtual meetings.",
    icon: "/icons/zoom.svg",
  },
  {
    id: "note-taking",
    title: "Notion",
    description:
      "Sync your Notion workspace with our platform to access notes and resources.",
    icon: "/icons/notion_icon.svg",
  },
  {
    id: "calendar-sync",
    title: "Google Calendar",
    description:
      "Sync your Google Calendar to keep track of important dates and deadlines.",
    icon: "/icons/google-calendar.svg",
  },
  {
    id: "cloud-storage",
    title: "Google Drive",
    description:
      "Integrate with Google Drive to easily access and share files and resources.",
    icon: "/icons/google-drive.png",
  },
];

const IntegrationsPage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-3xl p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Integrations</h1>
        <p className="text-lg mt-2">
          Explore how our platform integrates with other tools to enhance your
          experience.
        </p>
      </div>

      <div className="my-6 flex justify-center">
        <div className="relative ">
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrationsData.map((integration) => (
          <Card
            key={integration.id}
            className="transition duration-500 ease-in-out transform hover:scale-105"
          >
            <CardBody className="flex flex-col items-center text-center p-4">
              <img
                src={integration.icon}
                alt={integration.title}
                className="w-20 h-20 mb-4"
              />
              <h3>{integration.title}</h3>
              <p>{integration.description}</p>
            </CardBody>
            <CardFooter>
              <Button as="a" href="/integration-details">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button color="primary" size="lg">
          Get Started with Integrations
        </Button>
      </div>
    </div>
  );
};

export default IntegrationsPage;
