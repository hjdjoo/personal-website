export interface Project {
  projectName: string,
  projectDescription: string,
  projectData: Array<ProjectData | undefined>
}

export interface ProjectData {
  fileType: string,
  fileDescription: string,
  altText: string,
  src: string,
}
