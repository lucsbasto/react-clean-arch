export class UnexpectedError extends Error {
  constructor () {
    super('Unexpected Error, Try again soon.')
    this.name = 'UnexpectedError'
  }
}
