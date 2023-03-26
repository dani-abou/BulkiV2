import { Menu } from "@mui/material";
import algoliasearch from "algoliasearch/lite";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";
import { connectSearchBox, connectStateResults, InstantSearch, SearchBox } from "react-instantsearch-dom";
import { urls } from "../../common";
import { SearchResult, StyledBulkiInput, StyledDropdown, StyledSearchButton } from "./style";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY,
);


function SearchField({ currentRefinement, refine, setAnchor }) {
  const onChange = e => {
    const value = e.currentTarget.value;
    if (value.length >= 3) setAnchor(e.currentTarget);
    else setAnchor()
    refine(e.currentTarget.value)
  }

  return <form>
    <StyledBulkiInput
      color='primary'
      focused
      suffix={
        <StyledSearchButton
          type="submit" >
          Search</StyledSearchButton>
      }
      style={{ marginRight: '20px' }}
      placeholder='Search for'
      value={currentRefinement}
      size='small'
      onChange={onChange}
    />
  </form>
}

const ConnectedField = connectSearchBox(SearchField);

function SearchInstantSearch({ searchState, searchResults, anchor, setAnchor }) {
  // checking if the query length is >= 3
  // (since 3 is the minimum Algolia query length)
  const validQuery = searchState.query?.length >= 3;
  return searchState.query && validQuery ? (
    <StyledDropdown>
      <Menu
        anchorEl={anchor}
        open={anchor}
        onClose={() => setAnchor()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{ elevation: 20, sx: { width: anchor?.offsetWidth || 143, marginTop: '5px' } }}

      >
        {console.log(searchResults)}
        {
          searchResults?.hits.map((hit, idx) => {
            return <Link key={idx} href={`${urls.listing}/${hit.objectID}`}>
              <SearchResult>{hit.name}</SearchResult>
            </Link>
          })
        }
      </Menu>

    </StyledDropdown >
  ) : null;
}

const ConnectedResults = connectStateResults(SearchInstantSearch)

export default function Search({ loginRef, searchbarValue, setSearchbarValue }) {
  const [anchor, setAnchor] = useState();
  return <InstantSearch searchClient={searchClient} indexName="prod_listings">
    <ConnectedField setAnchor={setAnchor} />
    <ConnectedResults anchor={anchor} setAnchor={setAnchor} />
  </InstantSearch>

}