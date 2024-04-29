import { Card, CardFooter, Textarea, Image } from "@nextui-org/react"; // Import Text from NextUI if available
import { BookText } from "lucide-react";

const servicesData = [
  {
    title: "Course Management",
    description:
      "Streamline course setup, scheduling, and enrollment processes. Our tools make it easy to organize and modify course details.",
    icon: <BookText />, // Assuming BookText is correctly rendered here
    image: "/icons/course_management_icon.png",
  },
  {
    title: "Assignment Handling",
    description:
      "Automate the distribution and collection of assignments. Track submission deadlines and provide feedback seamlessly.",
    icon: <BookText />,
    image: "/icons/assignment_handling_icon.png",
  },
  {
    title: "Grade Tracking",
    description:
      "Easily manage and record grades. Analyze student performance with our comprehensive tools, helping educators make informed decisions.",
    icon: <BookText />,
    image: "/icons/grade_tracking_icon.png",
  },
  {
    title: "Resource Accessibility",
    description:
      "Provide students and staff with easy access to educational resources, enhancing learning opportunities and academic support.",
    icon: <BookText />,
    image: "/icons/resource_accessibility_icon.png",
  },
  {
    title: "Agenda Management",
    description:
      "Keep track of important dates and events. Our tools help you manage schedules and deadlines efficiently.",
    icon: <BookText />,
    image: "/icons/resource_accessibility_icon.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-3xl p-8">
      <h1 className="text-center text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {servicesData.map((service) => (
          <Card key={service.title} className="relative overflow-hidden">
            <CardFooter className="flex flex-col items-center text-center p-4 z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <Image
                src={service.image}
                removeWrapper
                className="z-0 w-full h-full object-cover"
                alt={service.title}
              />
              <h4 className="font-bold text-lg mb-2 backdrop-blur-md">
                {service.title}
              </h4>
              <p className="backdrop-blur-md">{service.description}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
