const error: string = "Please provid valid input"

const probFiveFunc = (peram: unknown): void => {

    if (typeof peram == "string") {
        console.log(peram)
    } else {
        console.log(error)
    }
}