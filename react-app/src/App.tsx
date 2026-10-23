import { useState } from "react";
import type { ReactNode } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

interface FilmProps {
  src: string;
  name: string;
  year: number;
  rating: number;
}

interface KsiazkaProps {
  src: string;
  name: string;
  year: number;
  pages: number;
}

interface UtworProps {
  name: string;
  time: string;
}

interface AlbumProps {
  src: string;
  name: string;
  singer: string;
  type: string;
  year: number;
  songs: UtworProps[];
}

const movies: FilmProps[] = [
  {
    name: "Jaws",
    src: "https://cdng.europosters.eu/pod_public/1300/262718.jpg",
    year: 1975,
    rating: 8,
  },
  {
    name: "Fast & Furious",
    src: "https://media.upflix.pl/renditions/20994/v0/poster_detail@1.webp",
    year: 2001,
    rating: 6,
  },
  {
    name: "The Matrix",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLYNVT9-YDFhJlPng3TEDIb_eVmbAZ2r_ElDOk61KgA&s=10",
    year: 1999,
    rating: 9,
  },
   {
    name: "Wilk z Wall Street",
    src: "https://m.media-amazon.com/images/S/pv-target-images/3ac6d422818cdb81871f7adad3800787af9bed04fc4abc8ae25da84be6b33b3c.jpg",
    year: 2013,
    rating: 9,
  },
];

const books: KsiazkaProps[] = [
  {
    name: "Quo Vadis",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Poster_-_Quo_Vadis_%281951%29_01.jpg?utm_source=pl.wikipedia.org&utm_campaign=index&utm_content=original",
    year: 1896,
    pages: 418,
  },
  {
    name: "Krzyżacy",
    src: "https://antykwariat-torun.pl/environment/cache/images/productGfx_187213_500_500/krzyzacy-1.jpg",
    year: 1900,
    pages: 544,
  },
  {
    name: "Pan Tadeusz",
    src: "https://static.profinfo.pl/storage/image/core_products/2023/9/1/64b3cb9be6ad237890e933cf76656f82/admin/preview/74491A05502KS_HD.jpg.webp",
    year: 1834,
    pages: 348,
  },
    {
    name: "Bieguni",
    src: "https://ecsmedia.pl/cir/b/bieguni-ZDJECIE_OKLADKI_PRZOD_DUZY/3909/15717499031183909.webp",
    year: 2014,
    pages: 455,
  },
];

const albums: AlbumProps[] = [
  {
    name: "Luv Is Rage",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcAohAOkiCvcfjy_wsU11147Y6ODhkADiZeifbZRIlA&s=10",
    singer: "Lil Uzi Vert",
    type: "Rap",
    year: 2015,
    songs: [
      { name: "Safe House", time: "3:55" },
      { name: "Banned from TV", time: "3:13" },
      { name: "Super Saiyan", time: "2:54" },
      { name: "7AM", time: "3:13" },
      { name: "Yamnorghini Dream", time: "3:22" },
      { name: "Right Now", time: "3:34" },
      { name: "Top", time: "3:56" },
      { name: "All my chains", time: "3:29" },
      { name: "Belly", time: "4:52" },
      { name: "Enemies", time: "4:08" },
      { name: "Ballin", time: "4:37" },
      { name: "Paradise", time: "2:52" },
    ],
  },
  {
    name: "Grit & Grace",
    src: "https://ecsmedia.pl/c/grit-grace-b-iext202856687.jpg",
    singer: "Rich Amiri",
    type: "Rap",
    year: 2025,
    songs: [
      { name: "So Long", time: "3:55" },
      { name: "Lights Out", time: "3:13" },
      { name: "I Don't Mind", time: "2:54" },
      { name: "Flex N Finesse", time: "3:13" },
      { name: "See Us Now", time: "3:22" },
      { name: "Paranoid", time: "3:34" },
      { name: "Twin Flame", time: "3:56" },
      { name: "Hoes Mad", time: "3:29" },
      { name: "Homesick", time: "4:52" },
      { name: "In & Out", time: "4:08" },
      { name: "Moving Dumb", time: "4:37" },
      { name: "In That Mode", time: "2:52" },
      { name: "Never Have I", time: "4:52" },
      { name: "Brick Brick", time: "4:08" },
      { name: "Party Rock", time: "4:37" },
      { name: "Code Red", time: "2:52" },
    ],
  },
  {
    name: "Dr*gs r bad",
    src: "https://i.scdn.co/image/ab67616d0000b27365fc93b5c819602262be24d4",
    singer: "Lucki",
    type: "Rap",
    year: 2026,
    songs: [
      { name: "NUPPY INTRO", time: "3:55" },
      { name: "Picky Demons", time: "3:13" },
      { name: "Stupid Prizes", time: "2:54" },
      { name: "SUPERTUNE!!", time: "3:13" },
      { name: "Roundtripski", time: "3:22" },
      { name: "Loyal Snake", time: "3:34" },
      { name: "UR A VET!", time: "3:56" },
      { name: "Gemini Dramatics", time: "3:29" },
      { name: "Yesterday On My Face", time: "4:52" },
      { name: "Twin Flow", time: "4:08" },
      { name: "Brazy interlude", time: "4:37" },
      { name: "(madnesss)!", time: "2:52" },
    ],
  },
  {
    name: "More Chaos",
    src: "https://upload.wikimedia.org/wikipedia/en/2/26/Ken_Carson_-_More_Chaos.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    singer: "Ken Carson",
    type: "Rap",
    year: 2025,
    songs: [],
  },
];

movies.sort((a, b) => a.name.localeCompare(b.name));
books.sort((a, b) => a.name.localeCompare(b.name));
albums.sort((a, b) => a.name.localeCompare(b.name));

function Film({ src, name, year, rating }: FilmProps) {
  return (
    <div className="card h-100">
      <img src={src} alt={name} className="card-img-top" style={{ height: "400px", objectFit: "cover" }} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card1">Rok: {year}</p>
        <p className="card2">Ocena: {rating}/10</p>
        {rating >= 8 && <span className="badge bg-success">Polecany</span>}
      </div>
    </div>
  );
}

function Ksiazka({ src, name, year, pages }: KsiazkaProps) {
  return (
    <div className="card h-100">
      <img src={src} alt={name} className="card-img-top" style={{ height: "400px", objectFit: "cover" }} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card1">Rok wydania: {year}</p>
        <p className="card2">Liczba stron: {pages}</p>
        {year < 2000 && <span className="badge bg-secondary">Klasyka</span>}
      </div>
    </div>
  );
}

function Album({ src, name, singer, type, year, songs }: AlbumProps) {
  return (
    <div className="card h-100">
      <img src={src} alt={name} className="card-img-top" style={{ height: "300px", objectFit: "cover" }} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card1">Wykonawca: {singer}</p>
        <p className="card2">Typ: {type}</p>
        <p className="card3">Rok: {year}</p>

        {songs.length === 0 ? (
          <div className="alert alert-warning" role="alert">Brak utworów</div>
        ) : (
          <table className="table table-striped table-hover mt-2 align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Tytuł</th>
                <th className="text-end">Czas</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{song.name}</td>
                  <td className="text-end">{song.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function Sekcja({ title, children }: { title: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-5">
      <h1 className="display-6 border-bottom pb-2" style={{ cursor: "pointer", userSelect: "none" }} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▾" : "▸"} {title}
      </h1>
      {isOpen && (
        <div className="row g-4 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}

function App() {
  const newMovies = movies.filter((m) => m.year > 2010);
  const newestBooks = [...books].sort((a, b) => b.year - a.year);
  const biggestAlbum = [...albums].sort(
    (a, b) => b.songs.length - a.songs.length
  )[0];

  return (
    <div className="container py-4">
      <Sekcja title="Filmy">
        {movies.map((m) => (
          <div key={m.name} className="col">
            <Film {...m} />
          </div>
        ))}
      </Sekcja>

      <Sekcja title="Filmy po 2010 roku">
        {newMovies.map((m) => (
          <div key={m.name} className="col">
            <Film {...m} />
          </div>
        ))}
      </Sekcja>

      <Sekcja title="Książki">
        {books.map((b) => (
          <div key={b.name} className="col">
            <Ksiazka {...b} />
          </div>
        ))}
      </Sekcja>

      <Sekcja title="Książki od najnowszej">
        {newestBooks.map((b) => (
          <div key={b.name} className="col">
            <Ksiazka {...b} />
          </div>
        ))}
      </Sekcja>

      <Sekcja title="Albumy">
        {albums.map((a) => (
          <div key={a.name} className="col">
            <Album {...a} />
          </div>
        ))}
      </Sekcja>

      <Sekcja title="Album z największą liczbą utworów">
        <div className="col">
          <Album {...biggestAlbum} />
        </div>
      </Sekcja>
    </div>
  );
}
export default App;
