
interface FilmProps {
  src: string;
  name: string;
  year: number;
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

function Film({ src, name, year }: FilmProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <img src={src} alt={name} height={400} width={300} />
      <h3>{name}</h3>
      <p>Rok: {year}</p>
    </div>
  );
}

function Ksiazka({src,name,year,pages,}: KsiazkaProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <img src={src} alt={name} height={400} width={300} />
      <h3>{name}</h3>
      <p>Rok wydania: {year}</p>
      <p>Liczba stron: {pages}</p>
    </div>
  );
}

function Album({src,name,singer,type,year,songs,}: AlbumProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <img src={src} alt={name} height={300} width={300} />
      <h3>{name}</h3>
      <p>Wykonawca: {singer}</p>
      <p>Typ: {type}</p>
      <p>Rok: {year}</p>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tytuł</th>
            <th>Czas</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{song.name}</td>
              <td>{song.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div>

      <h1>Filmy</h1>
      <section
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Film
          name="Jaws"
          src="https://cdng.europosters.eu/pod_public/1300/262718.jpg"
          year={1975}
        />
        <Film
          name="Fast & Furious"
          src="https://media.upflix.pl/renditions/20994/v0/poster_detail@1.webp"
          year={2001}
        />
        <Film
          name="The Matrix"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLYNVT9-YDFhJlPng3TEDIb_eVmbAZ2r_ElDOk61KgA&s=10"
          year={1999}
        />
      </section>

      <h1>Książki</h1>

      <section
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Ksiazka
          name="Quo Vadis"
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Poster_-_Quo_Vadis_%281951%29_01.jpg?utm_source=pl.wikipedia.org&utm_campaign=index&utm_content=original"
          year={1896}
          pages={418}
        />
        <Ksiazka
          name="Krzyżacy"
          src="https://antykwariat-torun.pl/environment/cache/images/productGfx_187213_500_500/krzyzacy-1.jpg"
          year={1900}
          pages={544}
        />
        <Ksiazka
          name="Pan Tadeusz"
          src="https://static.profinfo.pl/storage/image/core_products/2023/9/1/64b3cb9be6ad237890e933cf76656f82/admin/preview/74491A05502KS_HD.jpg.webp"
          year={1834}
          pages={348}
        />
      </section>

      <h1>Albumy</h1>

      <section
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Album
          name="Luv Is Rage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcAohAOkiCvcfjy_wsU11147Y6ODhkADiZeifbZRIlA&s=10"
          singer="Lil Uzi Vert"
          type="Rap"
          year={2015}
          songs={[
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
          ]}
        />

        <Album
          name="Grit & Grace"
          src="https://ecsmedia.pl/c/grit-grace-b-iext202856687.jpg"
          singer="Rich Amiri"
          type="Rap"
          year={2025}
          songs={[
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
          ]}
        />

        <Album
          name="Dr*gs r bad"
          src="https://i.scdn.co/image/ab67616d0000b27365fc93b5c819602262be24d4"
          singer="Lucki"
          type="Rap"
          year={2026}
          songs={[
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
          ]}
        />
      </section>
    </div>
  );
}
export default App;
