import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    jobs: [],
    filteredJobs: [],
    initialized: false
}

export const jobSlice = createSlice({
    name: "jobSlice",
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
            state.filteredJobs = action.payload;
            state.initialized = true;
        },

        inputChange: (state, action) => {
            const filteredByQuery = state.jobs.filter((job) => {
                const selectedJob = job.company.toLowerCase();
                const query = action.payload.toLowerCase();

                return selectedJob.includes(query);
            });

            state.filteredJobs = filteredByQuery;
        },

        statusChange: (state, action) => {
            const filteredByStatus = state.jobs.filter((job) => job.status === action.payload);
            state.filteredJobs = filteredByStatus;
        },

        sortChange: (state, action) => {
            switch (action.payload) {

                case "a-z":
                    state.filteredJobs.sort((a, b) => {
                        if (a.company < b.company) return -1;
                        if (a.company > b.company) return 1;

                        return 0;
                    })

                    break;

                case "z-a":
                    state.filteredJobs.sort((a, b) => {
                        if (a.company < b.company) return 1;
                        if (a.company > b.company) return -1;

                        return 0;
                    })

                    break;

                case "En yeni":
                    state.filteredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));

                    break;

                case "En eski":
                    state.filteredJobs.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse();
                    break;

                default:
                    break;
            }
        },

        reset: (state) => {
            state.filteredJobs = state.jobs;
        }

    }
})

export const { setJobs, inputChange, statusChange, sortChange, reset } = jobSlice.actions
export default jobSlice.reducer