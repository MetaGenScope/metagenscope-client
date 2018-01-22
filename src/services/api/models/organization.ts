import { UserType } from './user';
import { AnalysisGroupType } from './analysisGroup';

export interface OrganizationType {
  id: string;
  name: string;
  adminEmail: string;
  users: Array<UserType>;
  sampleGroups: Array<AnalysisGroupType>;
}
export interface JsonOrganizationType {
  slug: string;
  name: string;
  admin_email: string;
  users: {
    users: Array<UserType>;
  };
  sample_groups: {
    sample_groups: Array<AnalysisGroupType>;
  };
}
