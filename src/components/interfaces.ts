import { CSSProperties } from "react";

export interface BaseProps {
    classNames?: string;
    style?: CSSProperties;
    children: JSX.Element | JSX.Element[];
}

export interface HeaderProps extends BaseProps {
    border?: boolean;
}

export interface FooterProps extends BaseProps {
    border?: boolean;
}

export interface ModalProps extends BaseProps {
    show: boolean;
    showCloseButton?: boolean;
    animated?: boolean;
    fullScreen?: boolean;
    blurEffect?: boolean;
    backgroundColor?: string;
    classCloseModal?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    animStyle?: 'slideTop' | 'slideBottom' | 'fade';
    position?: 'top' | 'middle' | 'bottom';
    setShow: (show: boolean) => void;
}
