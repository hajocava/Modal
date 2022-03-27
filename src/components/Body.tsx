import { BaseProps } from "./interfaces"

export const Body = ({ children, style = {}, classNames }: BaseProps) => {
    return (
        <div className={`modal-body ${classNames}`} style={{ ...style }}>
            {children}
        </div>
    )
}