import { Jj as TJj } from "../api/jj/Jj";

export const JJ_TITLE_FIELD = "id";

export const JjTitle = (record: TJj): string => {
  return record.id || String(record.id);
};
