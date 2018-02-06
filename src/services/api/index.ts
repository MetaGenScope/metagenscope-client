import axios from 'axios';

import { API_BASE_URL } from './utils';
import { JsonOrganizationType, OrganizationType } from './models/organization';
import { AnalysisGroupType } from './models/analysisGroup';
import {
  QueryResultType,
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
          id: organization.slug,
          name: organization.name,
          adminEmail: organization.admin_email,
          users: organization.users.users,
          sampleGroups: organization.sample_groups.sample_groups,
        };
      });
      return organizations;
    });
};

export const getOrganization = function(slug: string) {
  const options = {
    url: `${API_BASE_URL}/organizations/${slug}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    }
  };

  return axios(options)
    .then((res) => {
      const rawOrganization = res.data.data.organization as JsonOrganizationType;
      const sampleGroups = rawOrganization.sample_groups.sample_groups.map(group => {
        group.description = 'Lorem ipsum description.';
        return group;
      });
      const organization = {
        id: rawOrganization.slug,
        name: rawOrganization.name,
        adminEmail: rawOrganization.admin_email,
        users: rawOrganization.users.users,
        sampleGroups: sampleGroups,
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

export const getAnalysisGroup = function(slug: string) {
  const options = {
    url: `${API_BASE_URL}/sample_group/${slug}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      const sampleGroup: AnalysisGroupType = {
        slug: res.data.data.sample_group.slug,
        name: res.data.data.sample_group.name,
        queryResultId: res.data.data.sample_group.query_result_id,
        description: '[description not supported yet]',
      };
      return sampleGroup;
    });
};

export const getQueryResults = function(id: string) {
  const options = {
    url: `${API_BASE_URL}/query_results/${id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
  };

  return axios(options)
    .then((res) => {
      return res.data.data as QueryResultType;
    });
};

export const getSampleSimilarity = function(id: string) {
  const options = {
    url: `${API_BASE_URL}/query_results/${id}/sample_similarity`,
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
    url: `${API_BASE_URL}/query_results/${id}/taxon_abundance`,
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
    url: `${API_BASE_URL}/query_results/${id}/reads_classified`,
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
    url: `${API_BASE_URL}/query_results/${id}/hmp`,
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
        const categoriesMap = buildMap(result.data.categories);
        const dataMap = buildMap(result.data.data);
        result.data.categories = categoriesMap;
        result.data.data = dataMap;
      }
      return result;
    });
};

function buildMap(obj: object) {
  const map = new Map();
  Object.keys(obj).forEach(key => {
      map.set(key, obj[key]);
  });
  return map;
}
