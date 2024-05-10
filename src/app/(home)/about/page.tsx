"use client";

import React from "react";
import {
  Avatar,
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { User } from "lucide-react";

// Define TypeScript interfaces for team members and mission content
interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  content: string;
}

interface MissionContent {
  id: string;
  label: string;
  content: string;
}

const AboutPage = () => {
  // Team members data array
  const teamMembers: TeamMember[] = [
    {
      id: "gabhy",
      name: "Gabhy Rodrich KIBA",
      role: "Developer and co-founder",
      photo: "",
      content:
        "I'm a full-stack developer and co-founder of the project. I enjoy building scalable applications and solving complex problems. I'm an grade was in electronics and telecommunications engineering but i'm also passionate about web development. \n I'm from the Republic of Congo and i'm currently living in France. I'm a big fan of open-source software and i'm always looking for ways to contribute to the community.",
    },
    {
      id: "chabrey",
      name: "Chabrey MAKITA",
      role: "Communications Specialist and co-founder",
      photo: "",
      content:
        "Communications Specialist, enhancing our outreach and user engagement. Enjoys podcasting about educational technology. Passionate about making education accessible to all. I'm also from the Republic of Congo and majoring in ... in Cameroon. I'm a big fan of open-source software and i'm always looking for ways to contribute to the community.",
    },
    {
      id: "hugor",
      name: "Hugor EWANGOYI",
      role: "Developer and co-founder",
      photo: "",
      content:
        "Developer focused on frontend design and user experience. Passionate about creating intuitive interfaces.",
    },
  ];

  // Mission statement data
  const missionContent: MissionContent[] = [
    {
      id: "mission",
      label: "Our Mission",
      content:
        "Our mission is to help students and schools keep track of their educational journey, providing accessible tools to those with limited resources to help build their future.",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Tabs aria-label="About Us Sections" items={[...teamMembers]}>
        {(item: TeamMember | MissionContent) => (
          <Tab key={item.id} title={"name" in item ? item.name : item.label}>
            <Card className="p-10 max-w-3xl">
              <CardHeader className="flex items-center justify-start ">
                {"photo" in item && item.photo ? (
                  <Avatar src={item.photo} className="w-20 h-20" />
                ) : (
                  <Avatar
                    icon={<User className="w-10 h-10" />}
                    className="w-20 h-20"
                  />
                )}
                <div className="ml-2.5">
                  {" "}
                  <h3>{"name" in item ? item.name : item.label}</h3>
                  {"role" in item && <p>{item.role}</p>}
                </div>
              </CardHeader>

              <CardBody>
                <p>{item.content}</p>
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default AboutPage;
