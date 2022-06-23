import "../css/components.css"
import Avatar from './Avatar';
import { data } from '../data/data';


import { useNavigate } from "react-router-dom";

const Bio = () => {
    const navigate = useNavigate();
    const { personalData, bio } = data;

    return (
        <section className="sectionContainer">
            <Avatar avatar={personalData.avatar} />
            <div className="content">
                <h3 className="subTittleStyle">Biography</h3>
                <p className="paragraph">{bio}</p>
                <button className="btnRef" onClick={() => navigate("/about")}>More info</button>
            </div>
        </section>
    )
}
export default Bio;


