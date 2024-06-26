export interface Project {
  projectName: string,
  inProduction: boolean,
  projectDescription: string,
  projectData: Array<ProjectData | undefined>
}

export interface ProjectData {
  fileName: string,
  fileType: string,
  fileSrc: string,
  description: string,
  altText: string,
}
