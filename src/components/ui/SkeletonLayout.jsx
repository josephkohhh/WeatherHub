import { Skeleton } from "@mui/material";

export const SkeletonLayout = ({ children }) => {
  const skeletonStyles = {
    backgroundColor: "#EEEEEE",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width={"100%"}
      height={"100%"}
      style={skeletonStyles}
    >
      {children}
    </Skeleton>
  );
};
