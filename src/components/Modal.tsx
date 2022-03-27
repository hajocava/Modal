import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { ModalProps } from './interfaces';
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
}: ModalProps) => {

    const closeModalWhenCLicOutside = (e: any) => {
        if (e.target.className?.length > 0 && e.target.className.split(" ").includes(classCloseModal)) {
            setShow(false);
        }
    }
    
    return (
        <div
            onClick={closeModalWhenCLicOutside }
            className={`modal ${blurEffect ? 'blur' : ''}`}
            style={{ 
                display: show ? 'block' : 'none',
                backgroundColor
            }}
        >
            <div
                className={`modal-content ${size} ${classNames} ${animated ? 'animated' : ''} ${animStyle} ${position} ${fullScreen ? "full-screen":""}`}
                style={{ ...style }}
            >
                {
                    showCloseButton && (
                        <div className="close" onClick={() => setShow(false)}>
                            <svg viewBox="0 0 24 24" width="24" height="24"><g><path d="M2.47 2.47a.75.75 0 011.06 0L12 10.939l8.47-8.47a.75.75 0 01.976-.072l.084.073a.75.75 0 010 1.06L13.061 12l8.47 8.47a.75.75 0 01.072.976l-.073.084a.75.75 0 01-1.06 0L12 13.061l-8.47 8.47a.75.75 0 01-.976.072l-.084-.073a.75.75 0 010-1.06L10.939 12l-8.47-8.47a.75.75 0 01-.072-.976z" fill="#262E66" fillRule="evenodd"></path></g></svg>
                        </div>
                    )
                }
                {children}
            </div>
        </div>
    )
}

Modal.Header = Header
Modal.Footer = Footer
Modal.Body = Body
