import {API} from '../components/Api.js';
import { Poster } from '../components/Poster.js';
import { Header } from '../components/Header.js';
import { Search } from '../components/Search.js';
import { SortBy } from '../components/SortBy.js';

export const Home = () => {
  const { movies, setSearch, setSearchTerm } = API();
  const sortByProps = {
    setSearchTerm: setSearchTerm,
    setSearch: setSearch,
  };

  return (
    <>
    <Header setSearch={setSearch} setSearchTerm={setSearchTerm} 
        categories={
          <div className="d-flex align-items-end gap-4">
            <SortBy value="Popular" valueTerm="popularity" {...sortByProps} />
            <SortBy value="Most Rated" valueTerm="vote_count" {...sortByProps} />
            <SortBy value="Top Earning" valueTerm="revenue" {...sortByProps} />
            <SortBy value="Upcoming" valueTerm="primary_release_date" {...sortByProps} />
          </div>
        }
        searchComponent={
          <Search setSearch={setSearch} />
        }
      />
      


    <main>
          <Poster movies={movies}/>
    </main>
    </>
  )
}
