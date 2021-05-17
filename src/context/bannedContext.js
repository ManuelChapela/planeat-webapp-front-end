import React from 'react';

const BannedContext = React.createContext({id: false});

export const BannedProvider = BannedContext.Provider;

export default BannedContext;