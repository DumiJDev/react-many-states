import React from "react";

import { State } from './react-many-states';

export const useStates = (states: number, data: any[] | undefined) => {
  const o = React.useState;

  const array = [];

  for (let i = 0; i < states; i++) array[i] = i;

  return array.map((a, i) => {
    if (data) {
      const [get, set] = o<any>(data[i] ? data[i] : undefined);

      return { get, set } as State;
    } else {
      const [get, set] = o<any>();

      return { get, set } as State;
    }
  });
};

