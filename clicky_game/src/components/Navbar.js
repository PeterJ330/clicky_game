import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6"
  },
  left: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    textAlign: "center",
    width: "33%",
    float: "right"
    // float: "left",
    // clear: "both"
  },
  middle: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    textAlign: "center",
    width: "33%",
    float: "right"
    // clear: "both"
  },
  right: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    textAlign: "center",
    width: "33%",
    // float: "right",
    // clear: "both"
  }
};

const Navbar = () => (
  <div style={styles.card}>    
    <div style={styles.left}>Clicky Game</div>
    <div style={styles.middle}>Click an image to begin!</div>
    <div style={styles.right}>Score: 0 | Top Score: 0</div>

  </div>
);

export default Navbar;
