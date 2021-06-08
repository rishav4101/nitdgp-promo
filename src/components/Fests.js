import React from "react";
import { useStyles } from "./Styles";

export default function Fests() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <h1 className={classes.SectionHead}>OUR fests</h1>
      <div
        style={{
          textAlign: "center",
          width: "min(90%, 800px)",
          margin: "10px auto",
        }}
      >
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </div>
    </div>
  );
}
