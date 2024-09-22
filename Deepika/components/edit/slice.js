// src/redux/complianceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activity: '',
  dueDate: '',
  typeOfAct: '',
  state: '',
  period: '',
  formName: '',
  applicablelaboract: '',
  applicability: '',
  priorityType: '',
  remarks: '',
  section: '',
  Frequencyofcompliance: '',
  uploadDocument: null,
};


export const complianceSlice = createSlice({
  name: 'compliance',
  initialState,
  reducers: {
    setComplianceField: (state, action) => {
     return{ ...state, ...action.payload};
    },
    resetForm: () => initialState,
    },
});

export const { setComplianceField, resetForm } = complianceSlice.actions;
export default complianceSlice.reducer;
