import "./MyApp.css";
import TodoTable from "./TodoTable";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
      <h1> Todo - it! </h1>
      <span>The things you need to do are below, just do it!</span>
      <TodoTable />
    </div>
    </React.Fragment>
  );
}
