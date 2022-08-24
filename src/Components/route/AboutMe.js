import styled from "styled-components";
import Console from "../Console/Console";
import AboutLayout from "../Layouts/AboutLayout";

const AboutMe = () => {
  const windowData = [
    {
      title: "about me",
      data: [
        {
          path: "daniel",
          command: "cat aboutdaniel",
          isMain: false,
        },
        {
          path: "daniel/aboutdaniel",
          command:
            "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
          isMain: true,
        },
      ],
    },
    {
      title: "skills",
      data: [
        {
          path: "daniel",
          command: "cd skills",
          isMain: false,
        },
        {
          path: "daniel/skills",
          command: "ls",
          isMain: true,
        },
      ],
    },
    {
      title: "hobbies",
      data: [
        {
          path: "daniel",
          command: "cd hobbies",
          isMain: false,
        },
        {
          path: "daniel/hobbies",
          command: "ls",
          isMain: true,
        },
      ],
    },
  ];

  return (
    <AboutLayout>
      {windowData.map((data, index) => (
        <Console windowData={data} key={index}></Console>
      ))}
    </AboutLayout>
  );
};

export default AboutMe;
