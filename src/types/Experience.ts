import Organization from "./Organization";

export default interface Experience {
  id: string | number;
  type: string;
  organization: Organization;
  position: string;
  grade?: string | null;
  start_date: Date;
  end_date: Date | null;
}
