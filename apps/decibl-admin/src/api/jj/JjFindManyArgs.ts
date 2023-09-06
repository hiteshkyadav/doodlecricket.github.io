import { JjWhereInput } from "./JjWhereInput";
import { JjOrderByInput } from "./JjOrderByInput";

export type JjFindManyArgs = {
  where?: JjWhereInput;
  orderBy?: Array<JjOrderByInput>;
  skip?: number;
  take?: number;
};
