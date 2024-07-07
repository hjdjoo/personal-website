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

export interface MusicEvent {
  id: number,
  name: string,
  description: string,
  date: string
}

export interface MusicEventResource {
  id: number,
  eventId: number,
  name: string,
  type: string,
  description: string,
  src: string,
  altText: string
}