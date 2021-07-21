export function generateChar (_num = 3):string {
    return Math.random().toString(16).substr(2, _num)
}