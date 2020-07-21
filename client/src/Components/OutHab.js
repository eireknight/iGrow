/* eslint-disable react/prop-types */

import React, { memo } from "react";
import { List, Paper, Slide } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ListedMot from "./ListMot";

const HabList = memo(props => (
  <React.Fragment>
    {props.items.length > 0 && (
      <Slide direction="left" in>
        <Paper
          style={{
            marginRight: 2,
            marginLeft: 2,
            marginTop: 4,
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" style={{ textAlign: "center" }}>
            Habits
          </Typography>
          <Divider />
          <List
            style={{
              overflow: "scroll",
              padding: 0,
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}
          >
            {props.items.map((todo, indx) => (
              <ListedMot
                {...todo}
                // eslint-disable-next-line react/no-array-index-key
                key={`HabItem.${indx}`}
                divider={indx !== props.items.length - 1}
                onButtonClick={() => props.onItemRemove(indx)}
              />
            ))}
          </List>
        </Paper>
      </Slide>
    )}
  </React.Fragment>
));

export default HabList;
