import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requets';
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Row title="TVShow" fetchUrl={requests.fetchTVShow} />
    </>
  );
}

export default RowList