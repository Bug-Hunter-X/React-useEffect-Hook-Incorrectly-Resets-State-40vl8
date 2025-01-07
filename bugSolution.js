```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // No operation needed here; setting count to 0 is handled in useState
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```