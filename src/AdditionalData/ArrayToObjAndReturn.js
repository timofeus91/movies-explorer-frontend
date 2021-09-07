
//пример кода на реакте как переводить массивы в объекты и обратно. Для использования по кнопке лайк 
//можно запустить на codesendbox . код закомментен 

/*
import { useState } from "react";
import "./styles.css";

const initialServerFilms = [
  {
    id: "adasdsa-123123-asdasd",
    name: "Адвокат дьявола"
  },
  {
    id: "adasdsa-asdasdasd",
    name: "2"
  },
  {
    id: "adasdsa-sdfksdjflksdf",
    name: "3"
  },
  {
    id: "adasd128378129sj",
    name: "4"
  }
];


*/

/* НЕ НУЖНО РАЗКОМЕННТИРОВАТЬ! 

  {
    "adasdsa-123123-asdasd": {
      name: "Адвокат дьявола",
    }, 
    "adasdsa-asdasdasd": {
        name: "2",
    }
  }

*/

/*
const initialMyFilms = {};

function mapToObject(array) {
  const result = {};

  for (let obj of array) {
    result[obj.id] = {
      name: obj.name
    };
  }

  return result;
}

function mapObjectToArray(obj) {
  const result = [];

  for (let key in obj) {
    result.push({
      id: key,
      name: obj[key].name
    });
  }

  return result;
}

export default function App() {
  const [films, setFilms] = useState(initialServerFilms);
  const [myFilms, setMyFilms] = useState(initialMyFilms);

  const toggleLike = (f) => {
    const isLiked = f.id in myFilms;

    if (!isLiked) {
      // Add
      setMyFilms((mf) => ({
        ...mf,
        [f.id]: {
          name: f.name
        }
      }));
    } else {
      // Delete
      setMyFilms((mf) => {
        const newMyFilms = {};

        for (let key in mf) {
          if (key !== f.id) newMyFilms[key] = mf[key];
        }

        return newMyFilms;
      });
    }
  };

  return (
    <div className="App">
      <ul>
        {films.map((f, i) => (
          <li key={i}>
            {f.name}
            <br></br>
            <b onClick={() => toggleLike(f)}>
              {f.id in myFilms ? "Лайк" : "Не лайк"}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/