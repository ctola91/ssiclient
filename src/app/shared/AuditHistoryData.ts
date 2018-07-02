
export interface AuditHistoryData {
  audit_id: string;
  tableName: string;
  columnName: string;
  ids: string;
  oldvalue: string;
  newvalue: string;
  modifiedBy: string;
  date: string;
  modifiedDate: string;

}
