import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { ModalProps } from './interfaces';
import closeIcon from './closeIcon.svg';
import './styles.sass'

export const Modal = ({
    children,
    show,
    setShow,
    classNames,
    showCloseButton = true,
    size = 'md',
    style = {},
    animated = true,
    animStyle = 'fade',
    position = 'middle',
    fullScreen = false,
    backgroundColor = 'rgba(134, 134, 134, 0.702)',
    classCloseModal = 'modal',
    blurEffect = false,
    borderRadius = 15,
}: ModalProps) => {

    const closeModalWhenClickOutside = (e: any) => {
        if (e.target.className?.length > 0 && e.target.className.split(" ").includes(classCloseModal)) {
            setShow(false);
        }
    }

    return (
        <div
            onClick={closeModalWhenClickOutside}
            className={`modal ${blurEffect ? 'blur' : ''}`}
            style={{
                display: show ? 'block' : 'none',
                backgroundColor
            }}
        >
            <div
                className={`
                    modal-content 
                    ${size} 
                    ${classNames} 
                    ${animated ? 'animated' : ''} 
                    ${animStyle} 
                    ${position} 
                    ${fullScreen ? "full-screen" : ""}
                `}
                style={{
                    ...style,
                    borderRadius
                }}
            >
                <img
                    onClick={() => setShow(false)}
                    className="close"
                    src={closeIcon}
                    alt="close modal"
                    width="24px"
                    height="24px"
                    style={{
                        display: showCloseButton ? 'block' : 'none'
                    }}
                />
                {children}
            </div>
        </div>
    )
}

Modal.Header = Header
Modal.Footer = Footer
Modal.Body = Body
