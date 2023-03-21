import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({

  root: {
    margin: 5,
    borderRadius: 2,
    backgroundColor: "#fff",
    maxWidth: "100%",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 4px 0px;",
    },
  },

  media: {
    height: 0,
    paddingTop: "65.0%",
  },

  cardContent: {
    display: "flex",
    justifyContent: "left",
  },

  cardName: {
    fontSize: 16,
    color: "#000",
  },

  cardPrice: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  cardActions: {
    display: "flex",
    justifyContent: "left",
  },

  ratingView: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  linkBtn: {
    textDecoration: "none",
  },

}));
