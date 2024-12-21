export enum DIRECTION {
    N = 'N',
    S = 'S',
    E = 'E',
    W = 'W',
    NE = 'NE',
    NW = 'NW',
    SE = 'SE',
    SW = 'SW'
}

export function stringToDirection(str: string): DIRECTION {
    if (!(str in DIRECTION)) {
        throw Error(' not a key in DIRECTION')
    }
    const direction = DIRECTION[str as keyof typeof DIRECTION]
    return direction
}

// I have the following enum in typescript

// export enum DIRECTION {
//     N = 'N',
//     S = 'S',
//     E = 'E',
//     W = 'W',
//     NE = 'NE',
//     NW = 'NW',
//     SE = 'SE',
//     SW = 'SW'
// }

// can you write a function that receives a string and returns a DIRECTION?