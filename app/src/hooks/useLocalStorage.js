import React, {useState} from 'react';

// custom hooks for the win
// this one allows the app to save the todo list to the browser
// so that users don't lose their progress if they refresh the page
// or close the browser and come back to the app later
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const list = window.localStorage.getItem(key);
        return list ? JSON.parse(list) : initialValue;
    });

    const setValue = list => {
        setStoredValue(list);
        window.localStorage.setItem(key, JSON.stringify(list));
    }

    return [storedValue, setValue];
}