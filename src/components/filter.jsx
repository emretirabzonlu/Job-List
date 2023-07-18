import { useDispatch } from 'react-redux';
import { inputChange, reset, sortChange, statusChange } from '../app/jobSlice';

export default function Filter() {
    
    const dispatch = useDispatch();
   
    
    const onSearchChange = (e) => {
        dispatch(inputChange(e.target.value))
    }

    const onStatusChange = (e)=>{
        dispatch(statusChange(e.target.value))
    }

    const onSortChange = (e)=>{
        dispatch(sortChange(e.target.value))
    }

    const onResetButton = ()=>{
        dispatch(reset())
    }
    
    return (
        <section className="filter-sec add-sec">
            <h2>Arama Formu</h2>
            <div className="inputs">
                <div className="input-field">
                    <label>Şirket İsmi :</label>
                    <input type="text" onChange={(e) => onSearchChange(e)} />
                </div>
                <div className="input-field">
                    <label>Durum :</label>
                    <select onChange={(e)=>onStatusChange(e)}>
                        <option value="Hepsi" hidden>Hepsi</option>
                        <option value="Mülakat">Mülakat</option>
                        <option value="Reddedildi">Reddedildi</option>
                        <option value="Devam Ediyor">Devam Ediyor</option>
                    </select>
                </div>
                <div className="input-field">
                    <label>Sırala :</label>
                    <select onChange={(e)=>onSortChange(e)}>
                        <option value="En yeni">En yeni</option>
                        <option value="En eski">En eski</option>
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                    </select>
                </div>
                <button onClick={onResetButton}>Filtreleri Temizle</button>

            </div>
        </section>
    )
}