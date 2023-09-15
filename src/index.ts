const el = document.querySelector("h1") as HTMLHeadingElement;
const input = document.querySelector("input") as HTMLInputElement;
const btn = document.querySelector("button") as HTMLButtonElement;
const body = document.querySelector("body") as HTMLBodyElement;

body?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    el.innerHTML = `Samsung ${convertToTitle(parseInt(input?.value || "0"))}`;
    input.value = "";
    //@ts-ignore
    confetti() as any;
  }
});
btn?.addEventListener("click", () => {
  el.innerHTML = `Samsung ${convertToTitle(parseInt(input?.value || "0"))}`;
  input.value = "";
  //@ts-ignore
  confetti() as any;
});

function convertToTitle(columnNumber: number): string {
  let res = "",
    normal = "A".charCodeAt(0),
    base = 26;

  do {
    res = String.fromCharCode((--columnNumber % base) + normal) + res;
    columnNumber = (columnNumber / base) | 0;
  } while (columnNumber > 0);

  return res;
}
