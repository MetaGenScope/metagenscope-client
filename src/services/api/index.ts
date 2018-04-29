import axios from 'axios';

import { API_BASE_URL } from './utils';
import { JsonOrganizationType, OrganizationType } from './models/organization';
import { SampleGroupType } from './models/analysisGroup';
import { SampleType } from './models/sample';
import { AnalysisResultType, QueryResultWrapper } from './models/queryResult';

type LoginType = {
  email: string;
  password: string;
  username?: string;
};

export const authenticate = function(formType: string, data: LoginType) {
  const url = `${API_BASE_URL}/auth/${formType}`;
  return axios.post(url, data);
};

export const createOrganization = function(name: string, adminEmail: string) {
  const options = {
    url: `${API_BASE_URL}/organizations`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
    data: {
      name,
      admin_email: adminEmail,
    },
  };

  return axios(options);
};

export const getOrganizations = function() {
  const options = {
    url: `${API_BASE_URL}/organizations`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    }
  };

  return axios(options)
    .then((res) => {
      const rawOrganizations = res.data.data.organizations as Array<JsonOrganizationType>;
      const organizations: Array<OrganizationType> = rawOrganizations.map((organization) => {
        return {
          uuid: organization.uuid,
          name: organization.name,
          adminEmail: organization.admin_email,
          users: organization.users.users,
          sampleGroups: organization.sample_groups.sample_groups,
        };
      });
      return organizations;
    });
};

export const getOrganization = function(uuid: string) {
  const options = {
    url: `${API_BASE_URL}/organizations/${uuid}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    }
  };

  return axios(options)
    .then((res) => {
      const rawOrganization = res.data.data.organization as JsonOrganizationType;
      for (let i = 0; i < rawOrganization.sample_groups.sample_groups.length; i++) {
        const analysisUUID = res.data.data.organization.sample_groups.sample_groups[i].analysis_result_id;
        let description = res.data.data.organization.sample_groups.sample_groups[i].description;
        description = description !== '' ? description : 'Lorem ipsum description.';
        rawOrganization.sample_groups.sample_groups[i].analysisResultId = analysisUUID;
        rawOrganization.sample_groups.sample_groups[i].description = description;
      }
      const organization = {
        uuid: rawOrganization.uuid,
        name: rawOrganization.name,
        adminEmail: rawOrganization.admin_email,
        users: rawOrganization.users.users,
        sampleGroups: rawOrganization.sample_groups.sample_groups,
      };
      return organization;
    });
};

export const getUserStatus = function() {
  const options = {
    url: `${API_BASE_URL}/auth/status`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      return res.data.data;
    });
};

export const getSampleGroup = function(uuid: string) {
  const options = {
    url: `${API_BASE_URL}/sample_groups/${uuid}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      const rawDescription = res.data.data.sample_group.description;
      const sampleGroup: SampleGroupType = {
        uuid: res.data.data.sample_group.uuid,
        name: res.data.data.sample_group.name,
        analysisResultId: res.data.data.sample_group.analysis_result_uuid,
        description: rawDescription !== undefined ? rawDescription : '[description not supported yet]',
        theme: res.data.data.sample_group.theme,
      };
      return sampleGroup;
    });
};

export const getSampleGroupSamples = function(uuid: string) {
  const options = {
    url: `${API_BASE_URL}/sample_groups/${uuid}/samples`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      const rawSamples = res.data.data.samples;
      // tslint:disable-next-line no-any
      const samples: SampleType[] = rawSamples.map((rawSample: any) => {
        return {
          uuid: rawSample.uuid,
          name: rawSample.name,
          analysisResultUuid: rawSample.analysis_result_uuid,
          metadata: rawSample.metadata,
        };
      });
      return samples;
    });
};

export const getSample = function(uuid: string) {
  const options = {
    url: `${API_BASE_URL}/samples/${uuid}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      const sample: SampleType = {
        uuid: res.data.data.sample.uuid,
        name: res.data.data.sample.name,
        analysisResultUuid: res.data.data.sample.analysis_result_uuid,
        metadata: res.data.data.sample.meta,
        theme: res.data.data.sample.theme,
      };
      return sample;
    });
};

export const getAnalysisResults = function(uuid: string) {
  const options = {
    url: `${API_BASE_URL}/analysis_results/${uuid}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      return res.data.data.analysis_result as AnalysisResultType;
    });
};

// tslint:disable-next-line no-any
type ResultWrapperType<T> = (res: any) => QueryResultWrapper<T>;

// tslint:disable-next-line no-any
export const defaultWrap = <T>(res: any) => {
  return res.data.data as QueryResultWrapper<T>;
};

export const getAnalysisResult = <T>(uuid: string,
                                     type: string,
                                     wrapResult: ResultWrapperType<T> = defaultWrap) => {
  const options = {
    url: `${API_BASE_URL}/analysis_results/${uuid}/${type}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => wrapResult(res));
};
