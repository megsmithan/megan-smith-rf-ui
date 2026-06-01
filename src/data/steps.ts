export interface InfoColumn {
  id: string;
  heading: string;
  body: string;
}

export const step1Columns: InfoColumn[] = [
  {
    id: "general",
    heading: "General",
    body: "Define Attendee types & attributes",
  },
  {
    id: "title-1",
    heading: "Title",
    body: "Description that explains the value goes here. Description that explains the value goes here.",
  },
  {
    id: "title-2",
    heading: "Title",
    body: "Description that explains the value goes here. Description that explains the value goes here.",
  },
];

export interface WorkflowCard {
  id: string;
  title: string;
  body: string;
}

export const step2Workflows: WorkflowCard[] = [
  {
    id: "wf-1",
    title: "Attendee Registration",
    body: "Start by creating a general registration workflow",
  },
  {
    id: "wf-2",
    title: "Attendee Registration",
    body: "Start by creating a general registration workflow",
  },
  {
    id: "wf-3",
    title: "Attendee Registration",
    body: "Start by creating a general registration workflow",
  },
];

export const step3Portal = {
  title: "Attendee Portal",
  body: "Manage the portal that attendees will see after they've register for your event.",
};
