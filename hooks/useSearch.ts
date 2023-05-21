import useDebounce from "./useDebounce";

export default function useSearch(val: string, videoNames) {
  const debouncedValue = useDebounce(val, 500);
  const filteredNames = videoNames.filter(({ name }) => {
    if (debouncedValue === "") return true;
    return name.toLowerCase().includes(debouncedValue.toLowerCase());
  });

  return filteredNames;
}
