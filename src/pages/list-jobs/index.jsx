import { useEffect } from "react"
import useApi from './../../hooks/useApi';
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../../app/jobSlice";
import Filter from "../../components/filter";

export default function ListJobs() {
    const state = useSelector(state => state.jobState)
    const api = useApi();
    const dispatch = useDispatch();

    useEffect(() => {
        api
            .get("/jobs")
            .then((res) => dispatch(setJobs(res.data)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
        <Filter/>
            <h3 className="job-count">{state.filteredJobs.length} İş bulundu</h3>
            <section className="list-section">
                {!state.initialized ? (<p>Loading....</p>) : (
                    state.filteredJobs.map((job) => (
                        <div key={job.id} className="job-card">
                            {/* top of the card */}
                            <div className="head">
                                <div className="letter">
                                    <p>{job.company[0]}</p>
                                </div>
                                <div className="info">
                                    <p>{job.position}</p>
                                    <p>{job.company}</p>
                                </div>
                            </div>
                            {/* bottom of the card */}
                            <div className="body">
                                <div className="field">
                                    <img src="/images/map.png" />
                                    <p>{job.location}</p>
                                </div>
                                <div className="field">
                                <img src="/images/calendar.png" />
                                    <p>{job.date}</p>
                                </div>
                                <div className="field">
                                <img src="/images/bag.png"  />
                                    <p>{job.type}</p>
                                </div>
                                <div className="status">
                                    <p className={job.status}>{job.status}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </>
    )
}