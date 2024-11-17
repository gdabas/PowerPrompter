// app/utils/getPageTitle.ts
export const getPageTitle = (pathname: string): string => {
  switch (pathname) {
    case "/dashboard":
      return "Dashboard";
    case "/dashboard/profile":
      return "Profile";
    // Add more cases as needed
    default:
      return "Dashboard";
  }
};
