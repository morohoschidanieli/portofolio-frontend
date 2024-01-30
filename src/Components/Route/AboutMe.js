import Console from "../Terminal/Terminal";
import AboutLayout from "../Layouts/AboutLayout";

const AboutMe = () => {
  const windowData = [
    {
      title: "about me",
      data: [
        {
          path: "daniel",
          useDollarSign: true,
          command: ["cat aboutme"],
          commandType: "inline",
          isMain: false,
        },
        {
          path: "daniel/aboutme",
          useDollarSign: true,
          command: [
            "Hello! I'm Daniel. I'm a developer for Endava. I studied Electronics, Telecommunications and Information Technology at Technical University of Cluj-Napoca. I am a person open to learn and improve my professional skills. I believe that every opportunity is welcome and an additional 'brick' in creating my future. Every day I try to become better than yesterday and I consider that my skills are ready to be tested and improved.",
          ],
          commandType: "inline",
          isMain: true,
          useColumns: false,
        },
      ],
    },
    {
      title: "skills",
      data: [
        {
          path: "daniel",
          useDollarSign: true,
          command: ["cd skills"],
          commandType: "inline",
          isMain: false,
        },
        {
          path: "daniel/skills",
          useDollarSign: true,
          command: ["ls"],
          commandType: "inline",
          isMain: true,
        },
        {
          path: "Proficient With",
          useDollarSign: false,
          command: [
            "javascript",
            "typescript",
            "react js",
            "html5",
            "css3",
            "git",
            "sass",
            "bootstrap",
            "material ui",
            "tailwind css",
            "json-web-token",
            "jquery",
            "java",
            "nodejs",
            "mysql",
            "mongodb",
            "javaserver pages",
            "figma",
            "firebase",
            "azure",
          ],
          commandType: "column",
          isMain: false,
        },
        {
          path: "Exposed To",
          useDollarSign: false,
          command: ["vue", "angular", "python", "ruby on rails"],
          commandType: "column",
          isMain: false,
        },
      ],
    },
    {
      title: "hobbies",
      data: [
        {
          path: "daniel",
          useDollarSign: true,
          command: ["cd hobbies"],
          commandType: "inline",
          isMain: false,
        },
        {
          path: "daniel/hobbies",
          useDollarSign: true,
          command: ["ls"],
          commandType: "inline",
          isMain: true,
        },
        {
          path: "",
          useDollarSign: false,
          command: [
            "🏋️‍♀️ sport",
            "⚽️ football",
            "🎸 guitar",
            "✈️ traveling",
            "🕹 gaming",
            "🎥 movies",
          ],
          commandType: "list",
          isMain: false,
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
