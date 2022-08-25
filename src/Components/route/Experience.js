import Console from "../Terminal/Terminal";
import ExperienceLayout from "../Layouts/ExperienceLayout";

const Experience = () => {
  const windowData = [
    {
      title: "experience",
      data: [
        {
          path: "daniel",
          useDollarSign: true,
          command: ["cd experience"],
          commandType: "inline",
          isMain: false,
        },
        {
          path: "daniel/experience",
          useDollarSign: true,
          command: ["ls"],
          commandType: "inline",
          isMain: true,
          useColumns: false,
        },
        {
          path: "Endava(frontend dev)",
          useDollarSign: false,
          command: ["Jul 2022 - Present"],
          commandType: "list",
          isMain: false,
          useColumns: false,
        },

        {
          path: "Evozon(frontend dev)",
          useDollarSign: false,
          command: ["Sep 2021 - Jul 2022"],
          commandType: "list",
          isMain: false,
          useColumns: false,
        },
        {
          path: "Siemens(frontend dev intern)",
          useDollarSign: false,
          command: ["May 2021 - Jul 2021"],
          commandType: "list",
          isMain: false,
          useColumns: false,
        },
      ],
    },
  ];

  return (
    <ExperienceLayout>
      {windowData.map((data, index) => (
        <Console windowData={data} key={index}></Console>
      ))}
    </ExperienceLayout>
  );
};

export default Experience;
