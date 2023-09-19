import React, { useRef } from "react";
import Image from "next/image";
import styles from "./ProjectsPage.module.css";

interface PageProps {
  data: any;
}

export default function ProjectsPage({ data }: PageProps) {
  return (
    <div className={styles.projectsPageContainer}>
      <h1 id="projects">{data?.projects}</h1>
      <div className={styles.projectCardContainer}>
        {data?.projectInfo.map(
          (project: {
            id: number;
            title: string;
            description: string;
            icon: { data: { attributes: { url: string } } };
            href: string;
            tag: any[];
          }) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              className={styles.projectCard}
            >
              <div style={{ display:"flex", flexBasis:"60%", alignItems:"center", paddingTop:"1em" }}>
              <Image
                
                src={project?.icon?.data?.attributes?.url}
                width={180}
                height={180}
                alt="project_img"
              />
              </div>
              <div className={styles.projectContentContainer}>
                <h2 style={{ paddingBottom: "2px" }}>{project.title}</h2>
                <p>{project.description}</p>
                <div className={styles.tagContainer}>
                  {project?.tag.map((item: { id: number; header: string }) => (
                    <p key={item.id}>{item.header}</p>
                  ))}
                </div>
              </div>
            </a>
          )
        )}
      </div>
    </div>
  );
}
