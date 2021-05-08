import React from 'react';

const LoggedContext = React.createContext(false);

export const LoggedProvider = LoggedContext.Provider;

export default LoggedContext;