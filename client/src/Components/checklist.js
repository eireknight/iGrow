import React from "react";
import Grid from "@material-ui/core/Grid";
import Normalize from "react-normalize";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  useInputValue,
  useTimeValue,
  useTodos,
  useGoals,
  useHabs,
  useMots,
  useSelectValue,
} from "./hooks";

import Activity from "./Assignment";
import SchedList from "./OutSched";
import TaskList from "./OutTask";
import HabList from "./OutHab";
import MotList from "./OutMot";

function CheckList() {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { timeValue, changeTime } = useTimeValue();
  const { todos, addTask, checkTodo, removeTodo } = useTodos();
  const { goals, addGoal, checkGoal, removeGoal } = useGoals();
  const { habs, addHab, removeHab } = useHabs();
  const { mots, addMot, removeMot } = useMots();
  const { selectValue, changeSelect } = useSelectValue();

  const clearInputAndAddTodo = _ => {
    clearInput();
    if (selectValue === "Task") {
      addGoal(inputValue, selectValue);
    } else if (selectValue === "Habit") {
      addHab(inputValue, selectValue);
    } else if (selectValue === "Motivation") {
      addMot(inputValue, selectValue);
    } else {
      addTask(inputValue, selectValue, timeValue);
    }
  };

  return (
    <React.Fragment>
      <Normalize />
      <Grid
        container
        spacing={8}
        style={{ margin: "auto", maxWidth: 800, marginTop: 8, paddingRight: 8 }}
      >
        <Grid item xs={12} style={{ paddingBottom: 0 }}>
          <Activity
            inputValue={inputValue}
            onInputChange={changeInput}
            timeValue={timeValue}
            onTimeChange={changeTime}
            selectValue={selectValue}
            onSelectChange={changeSelect}
            onButtonClick={clearInputAndAddTodo}
            onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
          />
        </Grid>
        <Grid item xs={12} sm={12} style={{ paddingBottom: 0 }}>
          <SchedList
            items={todos}
            onItemCheck={indx => checkTodo(indx)}
            onItemRemove={indx => removeTodo(indx)}
          />
        </Grid>
        <Grid item xs={12} sm={12} style={{ paddingBottom: 2 }}>
          <TaskList
            items={goals}
            onItemCheck={indx => checkGoal(indx)}
            onItemRemove={indx => removeGoal(indx)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MotList items={mots} onItemRemove={indx => removeMot(indx)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <HabList items={habs} onItemRemove={indx => removeHab(indx)} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CheckList;
