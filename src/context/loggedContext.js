import React from 'react';

const LoggedContext = React.createContext(false);

export const LoggedProvider = LoggedContext.Provider;
export const LoggedConsumer = LoggedContext.Consumer;

export default LoggedContext;