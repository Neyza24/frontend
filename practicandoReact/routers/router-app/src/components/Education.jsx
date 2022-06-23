import "../css/components.css"
import Avatar from './Avatar';
import { data } from '../data/data';


const Education = () => {
    const { personalData, education } = data;
    return (
        <section className="sectionContainer">
            <Avatar avatar={personalData.avatar} />
            <div className="content">
                <h1 className="subTittleStyle">Education</h1>
                <ul className="liStyle">
                    {education.map(item =>
                        <li key={item.id}>
                            {item.institute}
                        </li>
                    )}
                </ul>
            </div>

        </section>
    )
}

export default Education;