import React from "react";
import "./experience.css";
// icons
import { BsFillPatchCheckFill, BsLink45Deg, BsLinkedin } from "react-icons/bs";

const Experience = () => {
  // Frontend skills data
  const [FrontEnd] = React.useState([
    {
      id: 4,
      skill: "React js",
    },
    {
      id: 9,
      skill: "Tailwind Css",
    },
    {
      id: 3,
      skill: "JavaScript",
    },
    {
      id: 3,
      skill: "Type script",
    },
    {
      id: 1,
      skill: "HTML,HTML5",
    },
    {
      id: 2,
      icon: <BsFillPatchCheckFill />,
      skill: "CSS,CSS3",
    },
    {
      id: 7,
      skill: "Bootstrap 4",
    },
    {
      id: 8,
      skill: "Sass",
    },
    {
      id: 6,
      skill: "framer-motion",
    },
    {
      id: 7,
      skill: "Headless UI",
    },
  ]);
  // // backend skills data
  // const [Backend] = React.useState([
  //   {
  //     id: 1,
  //     skill: "php",
  //   },
  //   {
  //     id: 2,
  //     skill: "Laravel",
  //   },
  //   {
  //     id: 3,
  //     skill: "mySQl",
  //   },
  //   {
  //     id: 4,
  //     skill: "Bootstrap 4,5",
  //   },
  // ]);
  const [Other] = React.useState([
    {
      id: 1,
      skill: "Github",
    },
    {
      id: 2,
      skill: "bitbucket",
    },
    {
      id: 3,
      skill: "Jira",
    },
    // {
    //   id: 2,
    //   skill: "postman",
    // },
  ]);
  return (
    <section id="experience" className="flex flex-col">
      <h5>what Skills I Have .. </h5>
      <h2> Skills and Experience</h2>
      <div className="flex flex-col gap-4 ">
        <div className="container expeience__container">
          {/* frontend start */}
          <div className="experinece__frontend  justify-between flex flex-col">
            <h3>Frontend Development</h3>

            <div className="experience__content">
              {FrontEnd.map((skill) => {
                return (
                  <article className="expeience__details" key={skill.id}>
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{skill.skill} </h4>
                      <small className="text-light">{skill.level}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          {/* frontend End */}

          {/* <div className="experinece__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          {Backend.map((skill) => {
            return (
              <article className="expeience__details" key={skill.id}>
              <BsFillPatchCheckFill className="experience__details-icon" />
              
              <div>
              <h4>{skill.skill} </h4>
              <small className="text-light">{skill.level}</small>
              </div>
              </article>
              );
            })}
          </div> */}

          {/* Other skills */}
          <div className="experinece__backend">
            <h3>Other Skills</h3>
            <div className="experience__content">
              {Other.map((skill) => {
                return (
                  <article className="expeience__details" key={skill.id}>
                    <BsFillPatchCheckFill className="experience__details-icon" />

                    <div>
                      <h4>{skill.skill} </h4>
                      <small className="text-light">{skill.level}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="container px-6 rounded-2xl p-4 "
          style={{ background: "#2c2c6c" }}
        >
          <h1 className=" text-blue-400"> Experience</h1>
          <div className="flex gap-x-2">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <p>
              working with TechBoom company as FrontEnd developer - full time
              (remotely)
            </p>
          </div>
          <div className="text-sm px-6 text-gray-500">
            using React js , Type script , Tailwind css , css , framer motion ,
            Handless Ui
          </div>
          <div className="flex flex-col items-starts">
            <div className="text-gray-200 flex items-center gap-x-1">
              <BsLink45Deg size={20} />
              <p className="border border-black text-blue-800">
                <a href="https://www.techboom.ai/">TechBoom </a>
              </p>
            </div>
            <div className="text-gray-200 px-1 flex items-center gap-x-1">
              <BsLinkedin size={16} />
              <p className="border border-black text-blue-800">
                <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A35473274&keywords=techboom&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=41f246c5-82f0-4089-8ee8-83048a4999df&sid=fCH">
                  TechBoom
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
