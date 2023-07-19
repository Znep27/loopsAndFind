const stuff = [5, 12, 8, 130, 44]

const finder = (thingArray, thing) => {
    let i = 0
    while (thingArray[i] < thing) {
        i++
    }
    console.log(thingArray[i])
}
finder(stuff, 13)