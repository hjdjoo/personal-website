export interface Project {
  project_name: string,
  project_description: string,
  tech_stack: string[],
  github_repo: string,
  project_data: Array<ProjectData | undefined>
}

export interface ProjectData {
  file_type: string,
  file_description: string,
  alt_text: string,
  src: string
}