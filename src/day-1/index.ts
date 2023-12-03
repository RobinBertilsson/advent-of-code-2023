import fs from 'node:fs/promises'
import path from 'path'

export async function main() {
  const data = await fs.readFile(path.resolve(__dirname, './input.txt'), {
    encoding: 'utf8'
  });

  let result = []

  data.split('\n').forEach(row => {
    const digitsOnRow = row.replace(/[^0-9.]/g, '')

    if (!digitsOnRow.length) {
      return
    } else if (digitsOnRow.length === 1) {
      result.push(`${digitsOnRow}${digitsOnRow}`)
    } else if (digitsOnRow.length === 2) {
      result.push(digitsOnRow)
    } else {
      result.push(`${digitsOnRow[0]}${digitsOnRow[digitsOnRow.length - 1]}`)
    }
  })

  const answer = result.reduce((accumulator: number, currentValue: string) => {
    return accumulator + parseInt(currentValue)
  }, 0)

  console.log(answer)
}
