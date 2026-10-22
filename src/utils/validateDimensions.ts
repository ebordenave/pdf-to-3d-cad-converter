export default function validateDimensions(
  width: number,
  height: number,
  depth: number,
): boolean {
  return width > 0 && height > 0 && depth > 0;
}
