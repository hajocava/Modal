import { HeaderProps } from "./interfaces"

export const Header = ({ children, style = {}, classNames = '', border = true }: HeaderProps) => {
    return (
        <div className={`modal-header ${classNames} ${border ? 'border' : ''}`} style={{ ...style }}>
            {children}
        </div>
    )
}
