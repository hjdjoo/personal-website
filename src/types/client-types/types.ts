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

export interface Album {
  id: number,
  name: string,
  description: string,
  releaseDate: string
}

export interface MusicEvent {
  id: number,
  name: string,
  description: string,
  date: string
}

interface Resource {
  id: number,
  name: string,
  type: string,
  description: string,
  src: string,
  altText: string
}

export interface AlbumResource extends Resource {
  albumId: number
}

export interface EventResource extends Resource {
  eventId: number
}
