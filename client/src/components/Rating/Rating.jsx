import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear, faFaceFrown, faFaceMeh, faFaceSmile, faFaceGrinBeam} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

//ToDo: when using multiple instances of Rating components, they intefere with other instances -- look into useRef hook
export default function Rating(props) {
    const {type} = props;
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState(-1);
    const labels = generateLabels(type);
    const icons = [faFaceGrinBeam, faFaceSmile, faFaceMeh, faFaceFrown, faFaceSadTear];
    const colors = ['#1FAF47', '#91D772', '#FFE144', '#FFA944', '#E31837'];
    const [label, setLabel] = useState(labels[labels.length/2]);
    const [tmpLabel, setTmpLabel] = useState('');
    return (
        <div className='w-fit m-auto h-20 mt-2'>
            {
                labels.map((l,i) => {
                    return (
                        <button type='button' key={i} 
                            id={`ratingBtn${type+i}`}
                            className='w-fit h-fit p-1 text-gray transition-transform transform hover:scale-110'
                            onMouseOver={() => {
                                const _selected = selected;
                                const e = document.getElementById(`ratingBtn${type+i}`);
                                if (_selected !== i) {
                                    e.style.color = colors[i];
                                }
                                setTmpLabel(labels[i].label);
                            }}
                            onMouseLeave={() => {
                                const _selected = selected;
                                const e = document.getElementById(`ratingBtn${type+i}`);
                                if (_selected !== i) {
                                    e.style.color = 'gray';
                                }
                                setTmpLabel('');
                            }}
                            onClick={() => {
                                // ToDo: Submit the value from l over to Parent Component
                                const _selected = selected;
                                if (_selected === -1) {
                                    setSelected(i);
                                    const e = document.getElementById(`ratingBtn${type+i}`);
                                    e.style.color = colors[i];
                                    setLabel(labels[i].label);
                                } else {
                                    let e = document.getElementById(`ratingBtn${type+_selected}`);
                                    e.style.color = 'gray';
                                    setSelected(i);
                                    e = document.getElementById(`ratingBtn${type+i}`);
                                    e.style.color = colors[i];
                                    setLabel(labels[i].label);                                    
                                }
                            }}
                        >
                            <FontAwesomeIcon className=' text-3xl' icon={icons[i]}/>
                        </button>
                    )
                })
            }
            {tmpLabel?.length !== 0 && <p className='text-center mt-2 font-regular'>{tmpLabel}</p> }
            {tmpLabel?.length === 0 && <p className='text-center mt-2 font-regular'>{label}</p> }
        </div>
    )
}

/**
 * Generates labels based on rating type. All are arranged from good to bad from 0..n
 * @param {string} type 
 * @returns 
 */
function generateLabels(type) {
    const map = {
        'Difficulty': [{label: 'Very Easy', value: 1}, {label: 'Easy', value: 2}, {label: 'Average', value: 3}, {label: 'Difficult', value: 4}, {label: 'Very Difficult', value: 5}],
        'Useful': [{label: 'Very Useful', value: 5}, {label: 'Useful', value: 4}, {label: 'Average', value: 3}, {label: 'Useless', value: 2}, {label: 'Very Useless', value: 1}],
        'Engaging': [{label: 'Very Engaging', value: 5}, {label: 'Engaging', value: 4}, {label: 'Average', value: 3}, {label: 'Boring', value: 2}, {label: 'Very Boring', value: 1}],
        'Clarity': [{label: 'Very Clear', value: 5}, {label: 'Clear', value: 4}, {label: 'Average', value: 3}, {label: 'Vague', value: 2}, {label: 'Very Vague', value: 1}],
        'Default': [{label: 'Awesome', value: 5}, {label: 'Great', value: 4}, {label: 'Good', value: 3}, {label: 'Ok', value: 2}, {label: 'Aweful', value: 1}]
    }

    if (type in map)
        return map[type];
    return map['Default'];
}