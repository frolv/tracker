import { SearchResultProps } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router-dom';

export interface TopbarSearchProps extends RouteComponentProps<TopbarSearchProps> {}

export interface TopbarSearchState {
  cachedSuggestions: { [key: string]: string[] };
  loading: boolean;
  results: SearchResultProps[];
  selected: number;
  value: string;
}
