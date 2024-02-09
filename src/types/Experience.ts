import Organization from "./Organization";

export default interface Experience {
  id: string | number;
  type: string;
  organization: Organization;
  position: string;
  startDate: Date;
  endDate: Date | null;
}
