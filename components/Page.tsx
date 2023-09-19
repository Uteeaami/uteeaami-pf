"use client";
import AboutMePage from "./pageComponents/AboutMePage";
import ProjectsPage from "./pageComponents/ProjectsPage";

interface PageProps {
  data: any;
}

export default function Page({ data }: PageProps) {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <AboutMePage data={data}/>
      <ProjectsPage data={data}/>
    </div>
  );
}
