import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

export default function AddJob() {
    const api = useApi();
    const navigate = useNavigate();
    
    const [formState, setFormState] = useState({
        id: Number(new Date().getTime()),
        position: "",
        company: "",
        location: "",
        status: "Mülakat",
        type: "Tam Zaman",
        date: new Date().toLocaleDateString(),

    })

    const handleSubmit = () => {
        if(!formState.position || !formState.company || !formState.location){
            toast.warn("Bütün form alanlarını doldurunuz !")
            
            return;
        }

        api.post("/jobs",formState)
        .then(()=>navigate("/"))
    }
    return (
        <section className="add-sec">
            <h2>Yeni İş Ekle</h2>
            <div className="inputs">

                <div className="input-field">
                    <label>Pozisyon</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setFormState({ ...formState, position: e.target.value })
                        }}
                    />
                </div>

                <div className="input-field">
                    <label>Şirket</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setFormState({ ...formState, company: e.target.value })
                        }}
                    />
                </div>

                <div className="input-field">
                    <label>Lokasyon</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setFormState({ ...formState, location: e.target.value })
                        }}
                    />
                </div>

                <div className="input-field">
                    <label>Durum</label>
                    <select
                        onChange={(e) => setFormState({ ...formState, status: e.target.value })}
                    >
                        <option value="Mülakat">Mülakat</option>
                        <option value="Devam Ediyor">Devam Ediyor</option>
                        <option value="Reddedildi">Reddedildi</option>
                    </select>
                </div>

                <div className="input-field">
                    <label>Tür</label>
                    <select
                        onChange={(e) => setFormState({ ...formState, type: e.target.value })}>
                        <option value="Tam Zaman">Tam Zaman</option>
                        <option value="Yarı Zaman">Yarı Zaman</option>
                        <option value="Uzaktan">Uzaktan</option>
                        <option value="Staj">Staj</option>
                    </select>
                </div>

                <button onClick={handleSubmit}>Ekle</button>
            </div>
            <ToastContainer />
        </section>
    )
}