import './Banner.css';

/**
 * 
 * @param {string} props_data_title 
 * @param {string} props_data_subTitle 
 * @returns 
 */

export default function Banner (props) {
    return (
        <div className="Banner">
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="subTitle">{props.data.subTitle}</p>
            </div>
        </div>
    )
}