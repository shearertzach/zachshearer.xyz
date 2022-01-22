import Project from "../components/Home/Project";
import ProjectsContainer from "../components/Home/ProjectsContainer";

export default function Home() {
  return (
    <div>
      <div className="text-center tracking-wide font-light p-2">
        <h1 className="text-4xl text-slate-300">Hello, world!</h1>
        <h1 className="text-3xl mt-2 text-slate-400">I'm a Fullstack Developer</h1>
        <div className="w-10 border-b mx-auto my-5 border-slate-500" />
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-4 w-full p-2">
        <ProjectsContainer>
          <Project title="Lunch Locker" description="Software for a local school that helps keep track of transactions and balances for student lunches." stack="NextJS, TailwindCSS, Vercel, Firebase " />
          <Project title="Portfolio Site" description="A portfolio I can reference when seeking job opportunities. Includes all of my past and present work along with my previous experiences." stack="NextJS, TailwindCSS, Vercel" />
          <Project title="SocialEyes" description="A social media platform where artists can share their favorite pieces of art. (WIP)" stack="NextJS, TailwindCSS, Vercel, Firebase" />
          <Project title="BoringStocks" description="Where stocks meet simplicity. Check on how your favorite stocks are doing with the click of one button." stack="Bootstrap, Chart.js, HTML, CSS, JavaScript" />
          <Project title="KaresUS" description="A local government assistance website. Fill out a form and receive help from a local government official. (Only available in KY)" stack="MongoDB, Express, NextJS, TailwindCSS, Vercel" />
        </ProjectsContainer>
      </div>
    </div>
  )
}
