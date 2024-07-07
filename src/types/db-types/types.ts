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

export interface Music_Event {
  id: number,
  name: string,
  description: string,
  date: string
}

export interface Music_Event_Resource {
  id: number,
  event_id: number,
  name: string,
  type: string,
  description: string,
  src: string,
  alt_text: string
}
