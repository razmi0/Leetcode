function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
}
