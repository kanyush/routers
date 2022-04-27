// Задание 6 ------------------------
/*
Реализовать фильтр постов по тэгам.
Если выбрать нужный тэг, должны отобразиться,
посты с выбранным тэгом.
Если выбрать два тэга, тогда
надо выводить посты с первым тегом, и посты 
со вторым тэгом. И т.д.
Примечание:
Надо проверять в списке тэгов наличие
выбранного тэга, то есть один пост с несколькими
тэгами может появиться при выборе первого
или второго.
Например: Пост "Новые возможности в ES2020" появляется
и среди 'js', и среди 'code'.
*/

import { useState } from "react";

const posts = [
  { title: "Новые возможности в ES2020", tags: ["js", "code"] },
  { title: "Основы программирования", tags: ["code"] },
  { title: "Что нового в обновлении Реакта", tags: ["react", "js"] },
  {
    title: "Как заставить себя кодить по 8 часов в день",
    tags: ["code", "self-development"]
  },
  {
    title: "Заправляем кровать, прежде чем  изменить мир",
    tags: ["self-development"]
  },
  { title: "Хуки в Реакт", tags: ["js", "react"] },
  {
    title: 'Как получается, что "однажды" бывает дважды?',
    tags: ["self-development"]
  }
];

function Exercise6() {
  const [selectedOptions, setSelectedOptions] = useState(new Set())

  const handleChange = (value) => {
    if(selectedOptions.has(value)) {
      selectedOptions.delete(value)
    } else {
      selectedOptions.add(value)
    }
    setSelectedOptions(new Set(selectedOptions))
  }

  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 6</h1>
      <label>
        <input type="checkbox" checked={selectedOptions.has('js')} onChange={() => handleChange('js')} />
        JS
      </label>
      <label>
        <input type="checkbox" checked={selectedOptions.has('code')} onChange={() => handleChange('code')} />
        Кодинг
      </label>
      <label>
        <input type="checkbox" checked={selectedOptions.has('react')} onChange={() => handleChange('react')} />
        Реакт
      </label>
      <label>
        <input type="checkbox" checked={selectedOptions.has('self-development')} onChange={() => handleChange('self-development')} />
        Саморазвитие
      </label>
      <Posts list={posts.filter((post) => {
        return post.tags.some((tag) => selectedOptions.has(tag))
      })} />
    </div>
  );
}

function Posts({ list }) {
  return (
    <ul>
      {list.map(post => (
        <li key={post.title}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Exercise6;

  