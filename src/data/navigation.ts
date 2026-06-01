export interface NavSubItem {
  id: string;
  label: string;
}

export interface NavItem {
  id: string;
  label: string;
  children?: NavSubItem[];
}

export const navItems: NavItem[] = [
  { id: "guide", label: "Guide" },
  {
    id: "attendees",
    label: "Attendees",
    children: [
      { id: "attendees-list", label: "Attendees" },
      { id: "attendee-types", label: "Attendee types" },
      { id: "packages", label: "Packages" },
      { id: "reg-codes", label: "Reg codes" },
      { id: "discounts", label: "Discounts" },
    ],
  },
  { id: "content", label: "Content" },
  { id: "exhibitors", label: "Exhibitors" },
];

export const activeNavId = "attendees";
