function capitalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word.length > 2) return word[0].toUpperCase() + word.slice(1);
      else return word;
    })
    .join(" ");
}
