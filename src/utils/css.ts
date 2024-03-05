/**
 * Get className from an array of classes.
 * @param classes The classes to generate a className for
 * @returns The className that includes all the classes
 */
export function classes(classes: Array<string | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
