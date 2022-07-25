import Head from "next/head";
import Experience from "../components/Experience/Experience";
import ExperienceContainer from "../components/Experience/ExperienceContainer";
import Project from "../components/Project/Project";
import ProjectsContainer from "../components/Project/ProjectsContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zach Shearer</title>
      </Head>

      <div className="text-center tracking-wide font-light p-2">
        <h1 className="text-4xl text-slate-300">Hello, world!</h1>
        <h1 className="text-3xl mt-2 text-slate-400">I'm a Fullstack Developer</h1>
        <div className="w-10 border-b mx-auto my-5 border-slate-500" />
      </div>



      <div className="md:grid md:grid-cols-2 md:gap-4 w-full p-2">
        <div>
          <h2 className="text-center text-2xl text-slate-200 my-5 font-light">Projects</h2>
          <ProjectsContainer year={"2022"}>
            <Project title="Lunch Locker" description="Software for a local school that helps keep track of transactions and balances for student lunches." stack={["NextJS", "TailwindCSS", "Vercel", "Firebase"]} />
            <Project title="Portfolio Site" description="A portfolio I can reference when seeking job opportunities. Includes all of my past and present work along with my previous experiences." stack={["NextJS", "TailwindCSS", "Vercel"]} />
          </ProjectsContainer>
          <ProjectsContainer year={"2021"}>
            <Project title="BoringStocks" description="Where stocks meet simplicity. Check on how your favorite stocks are doing with the click of one button." stack={["Bootstrap", "Chart.js", "HTML", "CSS", "JavaScript"]} />
            <Project title="KaresUS" description="A local government assistance website. Fill out a form and receive help from a local government official. (Only available in KY)" stack={["MongoDB", "Express", "NextJS", "TailwindCSS", "Vercel"]} />
          </ProjectsContainer>
        </div>
        <div>
          <h2 className="text-center text-2xl text-slate-200 my-5 font-light">Experience</h2>
          <ExperienceContainer year={"2022"}>
            <Experience title="Bachelors of Science in Applied Computer Science" description="Working intensively over two years through an accelerated bachelors degree, I learned industry leading practices through real-world projects and programming lessons." takeaways={["Industry Projects", "5+ Programming Languages", "Sorting Algorithms", "Frontend & Backend Development"]} />
            <Experience title="Freelance" description="Software engineering contract work. Working with big and small businesses to fit their software needs where it's applicable." takeaways={["Development Pipelines", "Customer Satisfaction", "Efficient Communication"]} />
          </ExperienceContainer>
          <ExperienceContainer year={"2021"}>
            <Experience title="5th Dimension Strategies" description="Backend and Frontend development for large clientel. Created and reshaped online presence for businesses." takeaways={["Development Pipelines", "Customer Satisfaction", "Large Development Teams"]} />
          </ExperienceContainer>
          <ExperienceContainer year={"2020"}>
            <Experience title="Teaching Assistant" description="Assisted students with understanding the core concepts of introductory programming. Created and taught newly established curriculum. " takeaways={["Peer Connections", "Testing and Updating Curriculum"]} />
          </ExperienceContainer>
        </div>
      </div>
    </div>
  )
}
