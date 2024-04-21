export const handleCurrentMenu = (linkName: string) => {
  sessionStorage.setItem("currentMenu", linkName);
};
