const map = (arr, fns) => {
    let newArr = []
    for (const element of arr) {
        newArr.push(fns(element))
    }
    return newArr;
}

const reduce = (arr, fns, begin) => {
    let i = 1
    let total
    if (begin) {
        i = 0
        total = begin
    } else {
        total = arr[0]
    }
    for (i; i < arr.length; i++) {
        total = fns(total, arr[i])
    }
    return total;
}