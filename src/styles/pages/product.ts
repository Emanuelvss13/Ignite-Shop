import { styled } from "..";
import { fadeIn } from "./home";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 15fr 15fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",

  a: {
    color: "$gray100",
  },

  animation: `${fadeIn} 800ms`,
});

export const ImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7365d4 100%)",
  width: 567,
  height: 656,
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetailsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    color: "$white",
    fontSize: "$2xl",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    border: 0,
    padding: "1.25rem",
    backgroundColor: "$green500",
    color: "$white",
    cursor: "pointer",
    fontSize: "$md",
    fontWeight: "bold",
    borderRadius: 8,

    transition: "background-color 0.2s",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabeld):hover": {
      backgroundColor: "$green400",
    },
  },
});
