import React from "react";

const Stack = ({ id }) => {
  return (
    <main
      className="w-full min-h-screen py-8 px-4 sm:px-6 md:px-8 lg:px-12"
      id={id}
    >
      <h1 className="text-6xl font-bold mx-auto py-14">MY SKILLS</h1>
      <div className="text-2xl tracking-wide">
        <h3 className="text-3xl font-bold tracking-wide">
          As a seasoned full-stack developer with a core focus on the MERN
          stack, I bring a wealth of technical expertise and a passion for
          creating innovative solutions. My proficiency extends well beyond the
          confines of code, encompassing a profound understanding of how
          technology integrates with the real world. Here are some of the key
          pillars of my skillset:
        </h3>
        <br />
        <br />
        <br />
        <b>Front-end Excellence:</b> I craft captivating user interfaces using
        React.js and Next.js, ensuring that every pixel aligns seamlessly with
        the user`s needs. My proficiency in TypeScript guarantees robust and
        error-free code, while I leverage HTML5 and CSS3 to create responsive
        and visually engaging web applications. My experience with Redux allows
        for state management that`s both efficient and maintainable.
        <br />
        <br />
        <b>Back-end Mastery:</b> My back-end expertise revolves around Node.js
        and Express.js, allowing me to design and build highly performant and
        scalable server-side solutions. I delve into Nest.js for complex
        projects, and my RESTful API design is intuitive and elegant. GraphQL is
        another powerful tool in my arsenal, enabling flexible data querying. I
        excel in implementing JWT authentication and real-time communication
        with Socket.IO.
        <br />
        <br />
        <b>Database Wizardry:</b> Whether it`s MongoDB for flexibility or
        relational databases like MySQL and PostgreSQL for structured data, I
        navigate the database landscape with ease. My knowledge of NoSQL
        databases allows me to choose the right tool for each project, ensuring
        optimal data storage and retrieval.
        <br />
        <br />
        <b>Language Proficiency:</b> I`m fluent in both JavaScript and Python,
        with a particular focus on Python`s Django framework. This versatility
        allows me to adapt to the unique requirements of each project, selecting
        the most suitable language for the task at hand.
        <br />
        <br />
        <b>Version Control and Collaboration:</b> I`ve honed my skills in Git,
        GitHub, and GitLab to facilitate collaborative development and
        streamline version control. This ensures that projects remain organized,
        changes are tracked effectively, and teams work seamlessly.
        <br />
        <br />
        <b>Agile Mindset:</b> I`ve cultivated a robust set of soft skills
        through active participation in various real-world project simulations
        with a diverse group of colleagues across Latin America. My
        communication, teamwork, and problem-solving abilities are finely tuned,
        making me an effective and adaptable team player.
      </div>
    </main>
  );
};

export default Stack;
