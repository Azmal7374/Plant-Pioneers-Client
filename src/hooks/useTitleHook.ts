import { useEffect } from "react";

const useTitle = (title: unknown) => {
  useEffect(() => {
    document.title = `Plant Pioneers | ${title}`;
  }, [title]);
};

export default useTitle;
