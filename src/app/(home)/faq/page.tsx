"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-6 pb-10">
      <div className="max-w-3xl w-full px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h1>
        <Accordion>
          <AccordionItem
            key="1"
            title="What is StudyLabs?"
            subtitle="Learn more about StudyLabs"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            title="How do I start using StudyLabs?"
            subtitle="Getting started with StudyLabs"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            title="What features does StudyLabs offer?"
            subtitle="Explore the features of StudyLabs"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="4"
            title="How can I contact support?"
            subtitle="Need help? Get in touch with our support team"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
