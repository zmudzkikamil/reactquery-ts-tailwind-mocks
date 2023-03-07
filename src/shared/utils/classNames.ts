export function classNames(values: Record<string, boolean>): string {
  return Object.entries(values).reduce<string[]>((prev, [key, value]) => {
    if (value) {
      prev.push(key);
    }

    return prev;
  }, []).join(' ');
}
