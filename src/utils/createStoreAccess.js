const globalPrefix = process.env.STORAGE_PREFIX || 'kudosapp'
const getPrefixedKey = (prefix, key) => `${globalPrefix}-${prefix}-${key}`

class StoreAccessor {
    // Expose global prefix for reading.
    static get globalPrefix() {
        return globalPrefix
    }

    constructor(prefix) {
        this.prefix = prefix
    }

    getItem = key =>
        window.localStorage.getItem(getPrefixedKey(this.prefix, key))


    setItem = (key, value) =>
        window.localStorage.setItem(getPrefixedKey(this.prefix, key), value)


    removeItem = key =>
        window.localStorage.removeItem(getPrefixedKey(this.prefix, key))
}

/**
 * Factory creating instances of the StoreAccessor class. Grants an easier access to local storage and
 * prefixes keys with the global app's prefix and local instance's prefix.
 *
 * StoreAccessor mimics the API of local storage.
 *
 * @example
 * const storage = createStoreAccess('food')
 * storage.setItem('vegetable', 'banana') // will locally store 'banana' under the `[global-prefix]-food-vegetable` key.
 * storage.getItem('vegetable') // => banana
 *
 * @param prefix - prefix, that will be used when storing values through the returned accessor.
 * @returns StoreAccessor
 */
export default function createStoreAccess(prefix = '') {
    return new StoreAccessor(prefix)
}
