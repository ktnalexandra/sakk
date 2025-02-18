import { ChessList } from "./ChessList";
import { ChessSingle } from "./ChessSingle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ChessCreate = () => {
    const navigate = useNavigate();
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új sakkozó</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = {
                        name: event.target.name.value,
                        birth_date: event.target.birth_date.value,
                        world_ch_won: event.target.world_ch_won.value,
                        profile_url: event.target.profile_url.value,
                        image_url: event.target.profile_url.value,
                    };
                    axios.post("http://chess.sulla.hu/chess", formData, {
                        headers: {'Content-Type': 'application/json',},
                    })
                    .then(() => navigate("/"))
                    .catch((error) => console.error("Hiba történt: ", error))
                }}
            >
                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Sakkozó neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control"/>
                    </div>
                </div>

                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Születési éve:</label>
                    <div className="col-sm-9">
                        <input type="date" name="birth_date" className="form-control"/>
                    </div>
                </div>

                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Nyert világbajnokságot:</label>
                    <div className="col-sm-9">
                        <input type="number" name="world_ch_won" className="form-control"/>
                    </div>
                </div>

                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label">Profil URL-je</label>
                    <div className="col-sm-9">
                        <input type="" name="" className="form-control"/>
                    </div>
                </div>

                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label"></label>
                    <div className="col-sm-9">
                        <input type="text" name="profile_url" className="form-control"/>
                    </div>
                </div>

                <div className="form-group row pb-5">
                    <label className="col-sm-3 col-form-label"></label>
                    <div className="col-sm-9">
                        <input type="text" name="image_url" className="form-control"/>
                    </div>
                </div>

                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    )
}