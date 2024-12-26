export function Debounce(fn: Function, timer: number) {
    let timerCount: any;
    return function(...args: any[]) {
        clearTimeout(timerCount);
        timerCount = setTimeout(() => {
            fn(...args)
        }, timer)
    }
}

export function searchInArray(key: string, arrayObj: any[], itemNameToCompare: string) {
    return arrayObj.filter((item) => item[itemNameToCompare].toLowerCase().includes(key.toLowerCase()))
}