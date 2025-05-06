import React from 'react';
import { Button } from 'antd';

interface ImagesDisplayProps {
    images: { name: string; data: string }[];
    showImages: boolean;
    setShowImages: (show: boolean) => void;
    onDownloadZip: () => void;
    k: number | null;
}

const ImagesDisplay: React.FC<ImagesDisplayProps> = ({ images, showImages, setShowImages, onDownloadZip, k }) => (
    <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <div style={{ marginBottom: '30px' }}>
            <Button
                type="primary"
                onClick={() => setShowImages(!showImages)}
                style={{
                    width: '200px',
                    backgroundColor: 'white',
                    borderColor: 'blue',
                    color: 'blue',
                }}
            >
                {showImages ? 'Hide Images' : 'Show Returned Images'}
            </Button>
        </div>

        {showImages && (
            <>
                <h3>Generated Images:</h3>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {images.slice(0, k ?? 1).map((image, index) => (
                        <img
                            key={index}
                            src={image.data}
                            alt={`Generated ${index}`}
                            style={{
                                maxWidth: '150px',
                                margin: '10px',
                            }}
                        />
                    ))}
                </div>

                <Button
                    type="primary"
                    onClick={onDownloadZip}
                    style={{
                        width: '200px',
                        marginTop: '16px',
                        backgroundColor: 'white',
                        borderColor: 'blue',
                        color: 'blue',
                    }}
                >
                    Download All as Zip
                </Button>
            </>
        )}
    </div>

);

export default ImagesDisplay;
