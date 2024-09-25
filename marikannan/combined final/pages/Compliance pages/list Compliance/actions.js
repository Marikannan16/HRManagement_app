// actions.js
export const SET_COMPLIANCE_LIST = 'SET_COMPLIANCE_LIST';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_PAGINATION = 'SET_PAGINATION';
export const SET_SELECTED_ITEMS = 'SET_SELECTED_ITEMS';

// Action creators
export const setComplianceList = (list) => ({
  type: SET_COMPLIANCE_LIST,
  payload: list
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters
});

export const setPagination = (pagination) => ({
  type: SET_PAGINATION,
  payload: pagination
});

export const setSelectedItems = (items) => ({
  type: SET_SELECTED_ITEMS,
  payload: items
});



