import React, { useState } from 'react';
import './Tabs.css';

function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tab-container">
                {children.map((child, index) => (
                    <div
                        key={index}
                        className={`tab ${index === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {child.props.label}
                    </div>
                ))}
            </div>
            <div className="content">
                {children[activeTab]}
            </div>
        </div>
    );
}

function Tab({ label, children }) {
    return <div>{children}</div>;
}

export { Tabs, Tab };