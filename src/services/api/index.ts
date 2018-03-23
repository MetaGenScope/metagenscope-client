import axios from 'axios';

import { API_BASE_URL } from './utils';
import { JsonOrganizationType, OrganizationType } from './models/organization';
import { SampleGroupType } from './models/analysisGroup';
import {
  AnalysisResultType,
  QueryResultWrapper,
  SampleSimilarityResultType,
  TaxonAbundanceResultType,
  ReadsClassifiedType,
  HMPResultType,
} from './models/queryResult';

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
        rawOrganization.sample_groups.sample_groups[i].analysisResultId = analysisUUID;
        rawOrganization.sample_groups.sample_groups[i].description = 'Lorem ipsum description.';
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
      const sampleGroup: SampleGroupType = {
        uuid: res.data.data.sample_group.uuid,
        name: res.data.data.sample_group.name,
        analysisResultId: res.data.data.sample_group.analysis_result_uuid,
        description: '[description not supported yet]',
      };
      return sampleGroup;
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

export const getSampleSimilarity = function(id: string) {
  const options = {
    url: `${API_BASE_URL}/analysis_results/${id}/sample_similarity`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      return res.data.data as QueryResultWrapper<SampleSimilarityResultType>;
    });
};

export const getTaxonAbundance = function(id: string) {
  const options = {
    url: `${API_BASE_URL}/analysis_results/${id}/taxon_abundance`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      return res.data.data as QueryResultWrapper<TaxonAbundanceResultType>;
    });
};

export const getReadsClassified = function(id: string) {
  const options = {
    url: `${API_BASE_URL}/analysis_results/${id}/reads_classified`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      return res.data.data as QueryResultWrapper<ReadsClassifiedType>;
    });
};

export const getHMP = function(id: string) {
  const options = {
    url: `${API_BASE_URL}/analysis_results/${id}/hmp`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      // Convert to Map types
      const result = res.data.data as QueryResultWrapper<HMPResultType>;
      if (result.data) {
        const categoriesMap = result.data.categories;
        const dataMap = result.data.data;
        result.data.categories = categoriesMap;
        result.data.data = dataMap;
      }
      return result;
    });
};
