export interface Project {
  project_name: string,
  project_description: string,
  tech_stack: string[],
  github_repo: string,
  project_data: Array<Project_Data | undefined>
}

export interface Project_Data {
  file_type: string,
  file_description: string,
  alt_text: string,
  src: string
}

export interface Album {
  id: number,
  name: string,
  description: string,
  release_date: string
  album_resources?: Album_Resource[]
}

export interface Music_Event {
  id: number,
  name: string,
  description: string,
  date: string
  event_resources?: Event_Resource[]
}

interface Resource {
  id: number,
  name: string,
  type: string,
  description: string,
  src: string,
  alt_text: string
}

export interface Album_Resource extends Resource {
  album_id: number,
}

export interface Event_Resource extends Resource {
  event_id: number,
}



