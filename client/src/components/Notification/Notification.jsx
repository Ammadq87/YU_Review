import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Displays a notification with custom text messages
 * @param {string} props_data_type can be any of 'error', 'success', 'warning', 'info', or ''
 * @param {string} props_data_text message to display
 * @returns 
 */
export default function Notification (props) {
    const {type, text} = props.data;
        if (type === 'error') {
            toast.error(text, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        } else if (type === 'warning') {
            toast.warning(text, {
                position: toast.POSITION.TOP_RIGHT
            });
        } else if (type === 'info') {
            toast.info(text, {
                position: toast.POSITION.TOP_RIGHT
            });
        } else if (type === 'success') {
            toast.success(text, {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            toast(text, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    return (
        <div>
            <ToastContainer />
        </div>
    );
}

// export default function Notification (props) {
//     const {title, text, code} = props.data;
//     const icons = [<FontAwesomeIcon icon={faCircleExclamation}/>, <FontAwesomeIcon icon={faCircleCheck}/>]
//     let _code = (0 > code || code >= icons.length) ? 0 : code;

//     return (
//         <div className="Notification">
//             <header>
//                 <h3>{title}</h3>
//                 {icons[_code]}
//             </header>
//             <p>{text}</p>
//         </div>
//     )

// }