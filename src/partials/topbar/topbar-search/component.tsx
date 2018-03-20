import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Icon, Menu, Search, SearchProps, SearchResultProps } from 'semantic-ui-react';

import { TopbarSearchProps, TopbarSearchState } from './types';
import SearchResult from './search-result';

import './style.scss';

class TopbarSearch
extends React.Component<TopbarSearchProps & InjectedIntlProps, TopbarSearchState> {
  private SUGGESTION_URL: string = `${process.env.TRACKER_BACKEND}/v1/suggest`;

  public componentWillMount() {
    this.resetComponent();
    this.setState({ cachedSuggestions: {} });
  }

  public render() {
    let icon = <Icon link name="search" onClick={() => this.loadTracker(this.state.value)} />;
    let placeholder = this.props.intl.formatMessage({
      id: 'tbs-placeholder',
      defaultMessage: 'Enter a username'
    });

    return (
      <Menu.Item position="right">
        <Search
          className="tracker-topbar-search"
          fluid
          icon={icon}
          loading={this.state.loading}
          onKeyDown={this.handleKeyDown}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          onSelectionChange={this.handleSelectionChange}
          placeholder={placeholder}
          ref={elem => elem && elem.setState({ selectedIndex: this.state.selected })}
          results={this.state.results}
          resultRenderer={SearchResult}
          showNoResults={false}
          value={this.state.value}
        />
      </Menu.Item>
    );
  }

  private resetComponent() {
    this.setState({ loading: false, results: [], selected: -1, value: '' });
  }

  private canonicalize = (query: string) =>
    query.toLowerCase().trim().replace(/[^a-zA-Z0-9_\- ]/g, '').replace(/ /g, '_')

  /**
   * Loads the tracker page for the given username query.
   * @param query The username to load.
   */
  private loadTracker = (query: string) => {
    let user = this.canonicalize(query);
    if (user) {
      this.props.history.push(`/tracker/${user}`);
    }
  }

  private handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key == 'Enter' && this.state.selected == -1) {
      this.loadTracker(this.state.value);
    }
  }

  private handleResultSelect = (e: React.MouseEvent<HTMLElement>, { result }: SearchProps) => {
    this.loadTracker(result.title);
    this.setState({ value: result.title });
  }

  private handleSearchChange = (e: React.MouseEvent<HTMLElement>, { value }: SearchProps) => {
    if (!value) {
        this.resetComponent();
        return;
    }

    this.setState({ loading: true, selected: -1, value });
    this.getSuggestions(value);
  }

  private handleSelectionChange = (e: React.MouseEvent<HTMLElement>, props: SearchProps) => {
    if (props.results) {
      let results = props.results as SearchResultProps[];
      let active = props.result.title;
      let selected = results.findIndex(r => r.title == active);
      this.setState({ selected, value: active });
    }
  }

  /**
   * Create a list of SearchResultProps objects to render suggestion results.
   * @param qlen Length of the user's current query.
   * @param suggestions List of all suggestions for the query.
   */
  private buildResults = (qlen: number, suggestions: string[]) => suggestions.map(s => {
    return {
      title: s,
      typed: s.slice(0, qlen),
      suggested: s.slice(qlen)
    };
  })

  /**
   * Fetch search suggestions for the specified query.
   * @param query The search query.
   */
  private getSuggestions = async (query: string) => {
    let cached = this.state.cachedSuggestions;
    let suggestions;

    query = this.canonicalize(query);
    if (query) {
      if (cached[query]) {
        suggestions = cached[query];
      } else {
        try {
          let url = `${this.SUGGESTION_URL}?q=${query}&n=8`;
          let res = await fetch(url);

          suggestions = await res.json();
          cached[query] = suggestions;
        } catch (e) {
          suggestions = [];
        }
      }
    } else {
      suggestions = [];
    }

    this.setState({
      loading: false,
      results: this.buildResults(query.length, suggestions)
    });
  }
}

const RoutedTopbarSearch = withRouter(injectIntl(TopbarSearch));
export default RoutedTopbarSearch;
