import "../css/components.css"
import Avatar from './Avatar';
import { data } from '../data/data';


const Experience = () => {
    const { personalData, experience } = data;
    return (
        <section className="sectionContainer">
            <Avatar avatar={personalData.avatar} />
            <div className="content">
                <h1 className="subTittleStyle">Experience</h1>
                <ul className="liStyle">
                    {experience.map(item =>
                        <li key={item.id}>
                            {item.movie}
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Experience;