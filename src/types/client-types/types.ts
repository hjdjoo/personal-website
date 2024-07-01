export interface Project {
  projectName: string,
  projectDescription: string,
  techStack: string[],
  githubRepo: string,
  projectData: Array<ProjectData | undefined>
}

export interface ProjectData {
  fileType: string,
  fileDescription: string,
  altText: string,
  src: string,
}
