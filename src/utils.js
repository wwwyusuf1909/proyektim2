/**
 * Utility functions for the Link Hub
 */

export const formatCount = (count) => {
    return `${count} marta`;
};

export const getStorageItem = (key) => {
    return localStorage.getItem(key) || '0';
};

export const setStorageItem = (key, value) => {
    localStorage.setItem(key, value);
};
