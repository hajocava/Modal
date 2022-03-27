import { FooterProps } from "./interfaces"

export const Footer = ({ children, style = {}, classNames = '', border = true }: FooterProps) => {
    return (
        <div className={`modal-footer ${classNames}  ${border ? 'border' : ''}`} style={{ ...style }}>
            {children}
        </div>
    )
}
