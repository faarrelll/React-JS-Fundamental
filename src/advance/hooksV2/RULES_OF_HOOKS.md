Rules of hooks

Functions whose names start with use are called Hooks in React. (function depannya atau prefix use misal useComeback, useNoHand, useFoot, useTool)

DO

1. Call them at the top level in the body of a function component. (panggil hooks hanya di body function component) Hooks can only be called inside the body of a function component.
2. Call them at the top level in the body of a custom Hook. (hooks bisa panggil hooks juga, misal di custom hooks, sesuai kebutuhan kalian bisa bikin custom hooks kan misal useTheme, useLocalStorage, useLanguage)

DON'T

1. 🔴 Do not call Hooks inside conditions or loops.
2. 🔴 Do not call Hooks after a conditional return statement.
3. 🔴 Do not call Hooks in event handlers.
4. 🔴 Do not call Hooks in class components.
5. 🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
