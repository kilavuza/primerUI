import React from 'react';
import { Drawer, Tooltip, Radio, InputNumber, Input, Button, Slider } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

interface SettingsDrawerProps {
    visible: boolean;
    onClose: () => void;
    tempSettings: {
        selectedIndex: string | null;
        url: string;
        k: number | null;
        threshold: number | null;
        selectedDevice: string;
        folderName?: string;
    };
    onIndexChange: (e: any) => void;
    onUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFolderSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onThresholdChange: (value: number) => void;
    onDeviceChange: (e: any) => void;
    onFolderNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSaveSettings: () => void;
    savedUrls: string[];
}

const SettingsDrawer: React.FC<SettingsDrawerProps> = ({
    visible,
    onClose,
    tempSettings,
    onIndexChange,
    onUrlChange,
    onFolderSelect,
    onThresholdChange,
    onDeviceChange,
    onFolderNameChange,
    onSaveSettings,
    savedUrls,
}) => (
    <Drawer
        title="Settings"
        placement="right"
        visible={visible}
        onClose={onClose}
        width={400}
    >
        {/* Select Index */}
        <div style={sectionStyle}>
            <Tooltip title="Select the indexing type for your search.">
                <InfoCircleOutlined style={infoIconStyle} />
            </Tooltip>
            <h3>Select Index</h3>
            <Radio.Group onChange={onIndexChange} value={tempSettings.selectedIndex}>
                <Radio value="IndexIVFPQ">IndexIVFPQ</Radio>
                <Radio value="IndexFlatL2">IndexFlatL2</Radio>
                <Radio value="IndexIVFFlat">IndexIVFFlat</Radio>
            </Radio.Group>
        </div>

        {/* Number of Images */}
        <div style={sectionStyle}>
            <Tooltip title="This is the number of images that will be displayed on the screen.">
                <InfoCircleOutlined style={infoIconStyle} />
            </Tooltip>
            <h3>Number of Images to Display</h3>
            <InputNumber
                min={1}
                value={tempSettings.k}
                onChange={(value) => onThresholdChange(value ?? 1)}
                style={{ width: '100%' }}
            />
        </div>

        {/* URL Selection */}
        {/* URL Selection Section */}
        <div style={sectionStyle}>
            <Tooltip title="Enter the URL of the folder that contains images to find similarities.">
                <InfoCircleOutlined style={infoIconStyle} />
            </Tooltip>
            <h3>URL Selection</h3>

            {/* Input ile URL yaz */}
            <Input
                placeholder="Enter URL manually"
                value={tempSettings.url}
                onChange={onUrlChange}
                style={{ width: '100%', marginBottom: 8 }}
            />

            {/* Saved URLs'den Seçim */}
            <Radio.Group
                onChange={(e) => onUrlChange({ target: { value: e.target.value } } as React.ChangeEvent<HTMLInputElement>)}
                value={tempSettings.url}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                {savedUrls.map((savedUrl, index) => (
                    <Radio key={index} value={savedUrl}>
                        {savedUrl}
                    </Radio>
                ))}
            </Radio.Group>

            {/* Folder Input (Select Folder) */}
            <input
                id="folderInput"
                type="file"
                {...({ webkitdirectory: true } as React.InputHTMLAttributes<HTMLInputElement>)}
                onChange={onFolderSelect}
                style={{ display: 'none' }}
            />
            <Button
                onClick={() => document.getElementById("folderInput")?.click()}
                style={{ width: '160px', marginTop: '8px' }}
            >
                Select Folder
            </Button>
        </div>


        {/* Threshold */}
        <div style={sectionStyle}>
            <Tooltip title="Set the similarity threshold for image matching.">
                <InfoCircleOutlined style={infoIconStyle} />
            </Tooltip>
            <h3>Threshold: <span style={{ fontWeight: 'normal' }}>{tempSettings.threshold}</span></h3>
            <Slider
                min={-1}
                max={1}
                step={0.01}
                value={typeof tempSettings.threshold === 'number' ? tempSettings.threshold : 0}
                onChange={onThresholdChange}
                style={{ width: '100%' }}
            />
        </div>

        {/* Select Device */}
        <div style={sectionStyle}>
            <Tooltip title="Choose between CPU or GPU for processing.">
                <InfoCircleOutlined style={infoIconStyle} />
            </Tooltip>
            <h3>Select Device</h3>
            <Radio.Group
                onChange={onDeviceChange}
                value={tempSettings.selectedDevice}
            >
                <Radio value="cpu">CPU</Radio>
                <Radio value="gpu">GPU</Radio>
            </Radio.Group>
        </div>

        {/* Download Folder Name */}
        <div style={sectionStyle}>
            <Tooltip title="Enter the name of the folder you will download.">
                <InfoCircleOutlined style={infoIconStyle} />
            </Tooltip>
            <h3>Download Folder Name</h3>
            <Input
                placeholder="Enter folder name"
                value={tempSettings.folderName}
                onChange={onFolderNameChange}
                style={{ width: '100%' }}
            />
        </div>

        {/* Save Settings */}
        <div style={{ marginTop: '20px' }}>
            <Button type="primary" onClick={onSaveSettings}>
                Save Settings
            </Button>
        </div>
    </Drawer>
);

const sectionStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '16px',
    position: 'relative' as const,
};

const infoIconStyle = {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    color: '#1890ff',
    fontSize: '16px',
};

export default SettingsDrawer;
