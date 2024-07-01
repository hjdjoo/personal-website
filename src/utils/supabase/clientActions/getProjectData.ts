// import { ProjectData } from "@/types/client-types/types";
import { createClient } from "../client";
import type { Project } from "@/types/db-types/types";
import type { Project as ClientProject } from "@/types/client-types/types";

export const revalidate = 3600;

export default async function getProjectData(category: "engineering" | "music"): Promise<{ data: ClientProject[], error: any }> {

  const supabase = createClient();

  const { data, error } = await supabase
    .from(`${category}_projects`)
    .select("project_name, project_description, tech_stack, github_repo, project_data(file_type, file_description, alt_text, src)")
    .returns<Project[]>();

  return {
    data: data ? data.map((project: Project) => {

      const { project_name, project_description, tech_stack, github_repo, project_data } = project;

      const projectData = project_data.map((data) => {
        if (!data) return;
        const { src, alt_text, file_description, file_type } = data
        return {
          src: src,
          altText: alt_text,
          fileDescription: file_description,
          fileType: file_type
        }
      })

      return {
        projectName: project_name,
        projectDescription: project_description,
        techStack: tech_stack,
        githubRepo: github_repo,
        projectData: projectData,
      }
    }) : [],
    error: error
  }

}