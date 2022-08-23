import React, {ReactNode, useState} from 'react';
import s from './accordion.module.css'

type AccordionPropsType = {
    title: ReactNode
    children?: React.ReactNode
}

const Accordion: React.FC<AccordionPropsType> =
    ({
         title, children
     }) => {
        const [collapsed, setCollapsed] = useState(false)
        const [hiddenChildren, setHiddenChildren] = useState(false)
        
        function onClickHandler() {
            
            if (!hiddenChildren) {
                setCollapsed(true)
                setTimeout(() => setHiddenChildren(true), 300)
            } else {
                setHiddenChildren(false)
                setTimeout(() => setCollapsed(false), 1)
            }
        }
        
        const headClassName = s.head + (!collapsed ? (' ' + s.active) : '')
        let childrenClassName = s.children;
        if (hiddenChildren) childrenClassName += ' ' + s.hidden;
        if (collapsed) childrenClassName += ' ' + s.collapsed;
        
        return (
            <div className={s.accordion}>
                <div
                    className={headClassName}
                    onClick={onClickHandler}
                >
                    {title}
                </div>
                <div className={childrenClassName}>{children}</div>
            </div>
        )
    }

export default Accordion;