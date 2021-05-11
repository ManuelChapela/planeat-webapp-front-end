import React from 'react';

const HistoryContext = React.createContext(false);

export const HistoryProvider = HistoryContext.Provider;

export default HistoryContext;