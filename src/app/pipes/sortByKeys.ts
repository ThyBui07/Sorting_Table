// Errors.
const ERROR_REQUIRES_AT_LEAST_ONE_KEY = 'provide at least one key to sort by';
const ERROR_KEY_LENGTH_INVALID = 'a key was provided as an empty string';
const ERROR_DESC_KEY_LENGTH_INVALID = 'a descending key was missing the key name';
const ERROR_OBJECT_DOESNT_CONTAIN_KEY = 'a key you are attempting to sort by is not on all objects';

/**
 *  Recursive function to sort values by their keys.
 */
const sortByKey = <T>(a: T, b: T, ...keys: string[]): number => {
    let key = keys.shift();

    if (!key.length) {
        throw new Error(ERROR_KEY_LENGTH_INVALID);
    }

    let desc = false;
    // Check for descending sort.
    if (key.charAt(0) === '-') {
        if (key.length < 2) {
            throw new Error(ERROR_DESC_KEY_LENGTH_INVALID);
        }
        key = key.substr(1);
        desc = true;
    }

    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
    throw new Error(ERROR_OBJECT_DOESNT_CONTAIN_KEY);
    }
    // Determine checks based on asc / desc.
    const direction = (desc) ? -1 : 1;
    // Perform bubble sort based on the values.
    if (a[key] > b[key]) {
        return 1 * direction;
    }
    if (a[key] < b[key]) {
        return -1 * direction;
    }
    if (keys.length) {
        return sortByKey(a, b, ...keys);
    }
    return 0;
};

/**
 * Wrapper sort function for the recursive one.
 */
export const sortByKeys = <T>(data: T[], ...keys: string[]): T[] => {
    if (!keys.length) {
        throw new Error(ERROR_REQUIRES_AT_LEAST_ONE_KEY);
    }
    // Sort data.
    data.sort((a: T, b: T): number => {
        return sortByKey(a, b, ...keys);
    });
    return data;
};
