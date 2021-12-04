import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./Search.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Search: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.searchTitle}>都市名</div>
        <div className={styles.form}>
          <form className={styles.form}>
            <div className={styles.SearchBox}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                fontSize="14px"
                // height="24px"
              >
                <TextField
                  id="outlined-basic"
                  label="都市名を検索"
                  variant="outlined"
                />
              </Box>
            </div>
            <div className={styles.SearchBtn}>
              <Stack spacing={2} direction="row" height="52px">
                <Button variant="contained">検索</Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
