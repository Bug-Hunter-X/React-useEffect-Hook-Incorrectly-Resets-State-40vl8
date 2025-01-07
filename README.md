# React useEffect Hook Incorrectly Resets State

This repository demonstrates a common issue in React applications where the `useEffect` hook is misused, leading to unexpected state resets.  The `MyComponent` initially attempts to set the `count` state to 0 inside the `useEffect` hook without dependency. This causes the count to always be reset to 0, preventing the counter from incrementing. The solution illustrates the correct way to use useEffect to avoid this unintended behavior.

## Problem:
The provided code attempts to reset the state variable `count` to 0 every time the component renders, effectively breaking the counter functionality.  This is due to the empty dependency array `[]` in the `useEffect` hook.  Any code within `useEffect` with an empty dependency array will run only after the initial render.