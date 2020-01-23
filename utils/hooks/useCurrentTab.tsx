import React, { Context, useContext } from 'react';
import exp from 'constants';

const store = {
  currentTab: {
    currentTab: 0
  },
  test: {
    count: 0
  }
};

const currentTab = (state, action) => {
  if (action.type === 'setCurrentTab') {
    return { ...state, currentTab: action.value };
  } else {
    return state;
  }
};

const test = (state, action) => {
  if (action.type === 'increment') {
    return { ...state, count: state.count + action.value };
  } else {
    return state;
  }
};

// 自定义合并reducer函数
// 根据reducer定义的名称，拿到state中的对应名称下的state
// state 也是一个复合 state
// 返回值依然是个函数
const combineReducers = reducers => (state, action) =>
  Object.keys(reducers)
    // 拿到的state只是属于自己的key的那部分
    // 对每个reducer 都执行一次处理, 将结果存为新的state[key]
    .map(k => ({ [k]: reducers[k](state[k], action) }))
    // 整合出新state返回，看起来就像是一个reducer在干活
    .reduce((acc, cur) => Object.assign({}, acc, cur));

const reducers = combineReducers({ currentTab, test });

export function createCurrentTab() {
  const CurrentTabContext = React.createContext<{
    state: { [key: string]: any };
    actions: any;
  }>(null);
  function CurrentTabProvider(props: { children: any }) {
    const [state, dispatch] = React.useReducer(reducers, store);
    const actions = {
      setCurrentTab: e => {
        dispatch({ type: 'setCurrentTab', value: e });
      }
    };
    return (
      <CurrentTabContext.Provider
        value={{
          state,
          actions
        }}
      >
        {props.children}
      </CurrentTabContext.Provider>
    );
  }
  function useCurrentTab() {
    let value = React.useContext(CurrentTabContext);
    if (!value) {
      throw new Error('Component must be wrapped with <CurrentTabProvider>');
    }
    return value;
  }

  return { CurrentTabProvider, useCurrentTab };
}

const { CurrentTabProvider, useCurrentTab } = createCurrentTab();
export { CurrentTabProvider, useCurrentTab };
