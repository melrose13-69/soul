export class UseId {
  static readonly ids: number[] = []

  static generate (): number {
    const { floor, random } = Math
    const randomId = floor(random() * floor(10e5))

    if (UseId.ids.includes(randomId)) {
      return UseId.generate()
    }

    UseId.ids.push(randomId)

    return randomId
  }
}