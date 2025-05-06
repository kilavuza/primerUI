import React from 'react';
import { Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

interface HeaderProps {
    onSettingsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettingsClick }) => (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', marginLeft: "500px" }}>
        <h1 style={{ margin: 0 }}>Image Search with Text Prompt</h1>
        <Button
            type="link"
            icon={<SettingOutlined />}
            onClick={onSettingsClick}
            style={{ marginLeft: 'auto' }}
        >
            Settings
        </Button>
    </header>
);

export default Header;
