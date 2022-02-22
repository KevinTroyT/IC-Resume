export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getNum' : IDL.Func([], [IDL.Nat], []),
    'thumbsUp' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
