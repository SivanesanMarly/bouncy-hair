const p = {
  users: "M16 20a6 6 0 1 1 12 0 6 6 0 0 1-12 0zM6 46c0-8 6-12 14-12s14 4 14 12M38 22a5 5 0 1 1 10 0 5 5 0 0 1-10 0zM42 34c6 0 10 4 10 10",
  spa: "M30 48c-10-4-16-12-14-24 8 0 14 4 14 12 0-8 6-12 14-12 2 12-4 20-14 24z",
  spark: "M30 8l4 14 14 4-14 4-4 14-4-14-14-4 14-4z",
  home: "M8 30 30 10l22 20M14 26v22h32V26M26 48V34h8v14",
  clock: "M30 10a20 20 0 1 0 0 40 20 20 0 0 0 0-40zM30 20v11l8 5",
  star: "M30 8l7 15 16 2-12 11 3 16-14-8-14 8 3-16L7 25l16-2z",
  check: "M12 31l12 12 24-26",
};
export default function Icon({ name }) {
  return <svg className="ico" viewBox="0 0 60 60" aria-hidden="true"><path d={p[name]} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
