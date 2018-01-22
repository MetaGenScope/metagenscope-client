import axios from 'axios';

import { API_BASE_URL } from './utils';
import {
  JsonOrganizationType,
  OrganizationType
} from './models/organization';
import { AnalysisGroupType } from './models/analysisGroup';

type LoginType = {
  email: string;
  password: string;
  username?: string;
};

export const authenticate = function(formType: string, data: LoginType) {
  const url = `${API_BASE_URL}/auth/${formType}`;
  return axios.post(url, data);
};

export const createOrganization = function(data: { name: string, adminEmail: string }) {
  const options = {
    url: `${API_BASE_URL}/organizations`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.authToken}`
    },
    data,
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
        description: '[description not supported yet]',
      };
      return sampleGroup;
    });
};
