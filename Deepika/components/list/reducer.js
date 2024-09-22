// reducer.js
import { SET_COMPLIANCE_LIST, SET_FILTERS, SET_PAGINATION, SET_SELECTED_ITEMS } from './actions';

const initialState = {
  complianceList: [],
  filters: {
    activity: '',
    applicationType: '',
    typeOfAct: '',
    priority: '',
    frequency: '',
  },
  pagination: {
    currentPage: 1,
    totalPages: 0,
  },
  selectedItems: []
};

const complianceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPLIANCE_LIST:
      return { ...state, complianceList: action.payload };
    case SET_FILTERS:
      return { ...state, filters: action.payload };
    case SET_PAGINATION:
      return { ...state, pagination: action.payload };
    case SET_SELECTED_ITEMS:
      return { ...state, selectedItems: action.payload };
    default:
      return state;
  }
};

export default complianceReducer;
