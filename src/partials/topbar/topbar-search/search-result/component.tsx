import * as React from 'react';
import { SearchResultProps } from 'semantic-ui-react';

const SearchResult = ({ title, typed, suggested }: SearchResultProps) => [
  (
    <div key="content" className="content">
      {title &&
        <div className="title">
          {typed}
          <span className="completion">{suggested}</span>
        </div>
      }
    </div>
  ),
];

export default SearchResult;
