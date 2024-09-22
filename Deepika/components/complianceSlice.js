// src/redux/complianceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activity: '',
  dueDate: '',
  typeOfAct: '',
  state: '',
  period: '',
  formName: '',
  applicableLaborAct: '',
  applicability: '',
  priorityType: '',
  remarks: '',
  Section: '',
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
