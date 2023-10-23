# App.js

- Hook-эффект, выполняющий загрузку списка задач с сервера (useEffect => fetch...)
- Обработчик переключения состояния задачи - toggleTodo
- Обработчик удаления задачи - removeTodo
- Обработчик добавления новой задачи - addTodo
- Использование <Context.Provider>, передача колбэков через контекст
- Использование <React.Suspense> для ленивой загрузки компонента
- Использование индикатора загрузки - https://loading.io/css/
- проверка на пустоту списка задач при выводе

# TodoList.js:

- css стили в JSX через создание отдельного объекта
- описание propTypes
- обработчик изменения состояния задачи - onToggle

# TodoItem.js

- css стили в JSX через создание отдельного объекта

# AddTodo.js

- использование собственного хука useInputValue
- описание propTypes

# Modal.js:

- пример классового компонента
- css стили в выделенном файле
- использование <React.Fragment>
- условия в JSX

# Loader.js:

- css стили внутри JSX и в index.css
- описание propTypes
- использование контекста для передачи состояний
