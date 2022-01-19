import { is } from 'immutable'

export function propsEquals<T extends object>(
  previous: Readonly<T>,
  next: Readonly<T>
) {
  if (previous == null) return false
  if (previous === next) return true
  for (const key in next) {
    const inNext = Object.prototype.hasOwnProperty.call(next, key)
    const inPrevious = Object.prototype.hasOwnProperty.call(next, key)
    if (!inNext || !inPrevious) return false
    if (!is(previous[key], next[key])) return false
  }
  return true
}
