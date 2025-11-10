export interface BaseVM {
  id: number;
  createDate: string | null;
  createdBy: number;
  editDate: string | null;
  editedBy: number | null;
  entityStatusText: string;
}