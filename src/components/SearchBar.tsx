import React from 'react';
import { Button, Spin, Tooltip } from 'antd';

interface SearchBarProps {
    query: string;
    onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    loading: boolean;
    disabled: boolean;
    suggestedQuery: string | null;
    onSuggestedQueryClick: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    query, onQueryChange, onSearch, loading, disabled, suggestedQuery, onSuggestedQueryClick
}) => (
    <div style={{ textAlign: 'center' }}>
        <input
            type="text"
            value={query}
            onChange={onQueryChange}
            placeholder="Enter your search query"
            style={{
                width: '400px',
                height: '40px',
                fontSize: '16px',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
            }}
        />
        <div style={{ marginTop: '16px' }}>
            <Tooltip
                title={!query ? 'Please enter a query' : ''}
            >
                <Button
                    type="primary"
                    onClick={onSearch}
                    disabled={disabled}
                    style={{ width: '150px' }}
                >
                    {loading ? <Spin /> : 'Search'}
                </Button>
            </Tooltip>
        </div>

        {suggestedQuery && (
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <p>Did you mean <Button type="link" onClick={() => onSuggestedQueryClick(suggestedQuery)}>{suggestedQuery}</Button>?</p>
            </div>
        )}
    </div>
);

export default SearchBar;
