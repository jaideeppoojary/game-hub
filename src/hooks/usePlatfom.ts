import usePlatforms from "./usePlatforms";

const usePlatfom = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find(p => p.id === id);
}
export default usePlatfom;