import React, { memo } from "react";
import { List, Paper, Grow } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ListedTask from "./ListTask";

const TaskList = memo(props => (
  <React.Fragment>
    {props.items.length > 0 && (
      <Grow in>
        <Paper
          style={{
            marginRight: 2,
            marginLeft: 2,
            marginTop: 4,
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" style={{ textAlign: "center" }}>
            To Do
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
              <ListedTask
                {...todo}
                key={`GoalItem.${indx}`}
                divider={indx !== props.items.length - 1}
                onButtonClick={() => props.onItemRemove(indx)}
                onCheckBoxToggle={() => props.onItemCheck(indx)}
              />
            ))}
          </List>
        </Paper>
      </Grow>
    )}
  </React.Fragment>
));

export default TaskList;
