import React from "react";
import {NavLink, useLocation} from 'react-router-dom';

import {AppRoutes} from '../appRoutes.ts';

import styles from "./Navigation.module.sass";

const disabledLinkStyle: React.CSSProperties = {
    pointerEvents: 'none',
    opacity: '0.5',
    cursor: 'default',
    textDecoration: 'none'
}

// Навигация приложения
export const Navigation = () => {
    const location = useLocation();
    //
    const getLinkStyles = (linkPath: string): React.CSSProperties => {
        console.log('linkPath', linkPath)
        console.log('location.pathname', location.pathname)
        if (linkPath === location.pathname) return disabledLinkStyle;
        //
        return {};
    }
    //
    return (
        <nav>
            <nav>
                <NavLink
                    className={({ isActive }: { isActive: boolean }) =>
                        isActive ? styles['disabledLink'] : undefined
                    }
                    style={getLinkStyles(AppRoutes.Pi)}
                    to={AppRoutes.Pi}
                >
                    Пи
                </NavLink>
                | <NavLink
                    className={({ isActive }: { isActive: boolean }) =>
                        isActive ? styles['disabledLink'] : undefined
                    }
                    style={getLinkStyles(AppRoutes.Gematria)}
                    to={AppRoutes.Gematria}
                >
                    Гематрия
                </NavLink>
            </nav>
        </nav>
    );
};