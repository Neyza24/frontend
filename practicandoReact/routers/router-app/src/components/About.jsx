import "../css/components.css"
import Avatar from './Avatar';
import { data } from '../data/data';


const PersonalData = () => {
    const { personalData } = data;
    return (
        <section className="sectionContainer">
            <Avatar avatar={personalData.avatar} />
            <div className='content'>
                <h1 className="subTittleStyle">Personal information</h1>
                <ul className="liStyle">
                    <p>Name: {personalData.name}</p>
                    <p>Lastname: {personalData.lastname}</p>
                    <p>Age: {personalData.age}</p>
                    <p>Nationality: {personalData.nationality}</p>
                </ul>
            </div>
        </section>
    )
}

export default PersonalData;
