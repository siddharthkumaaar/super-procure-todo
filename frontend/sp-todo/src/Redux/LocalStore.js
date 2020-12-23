export const loadData = (key, item) => {

    localStorage.setItem(key,JSON.stringify(item))
    return true
}

export const getData = (key) => {

    let data = JSON.parse(localStorage.getItem(key))
    return data
}