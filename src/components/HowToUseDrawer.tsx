import React from 'react';
import { Drawer } from 'antd';

interface HowToUseDrawerProps {
    visible: boolean;
    onClose: () => void;
}

const HowToUseDrawer: React.FC<HowToUseDrawerProps> = ({ visible, onClose }) => (
    <Drawer
        title="How To Use"
        placement="left"
        visible={visible}
        onClose={onClose}
        width={400}
    >
        <p style={{ fontSize: '18px' }}>Follow these steps to use the image search feature:</p>
        <ol style={{ fontSize: '16px' }}>
            <li>Fill the configs from settings button</li>
            <li>Type the query</li>
            <li>Click "Search" to fetch images based on your query.</li>
            <li>View or download the images as needed.</li>
        </ol>
    </Drawer>
);

export default HowToUseDrawer;
