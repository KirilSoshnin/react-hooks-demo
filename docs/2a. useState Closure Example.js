// Closure Example

function useState(initial) {
  let local = initial;

  function state() {
    return local
  }

  function setState(newValue) { 
    local = newValue
  }

  return [state, setState]
}

const [count, setCount] = useState(0);

console.log(count());
setCount(1);
console.log(count());

console.log("--------------");

// Closure within closure using the module pattern
const React = (function () {
  let local;

  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },

    useState(initial) {
      local = local || initial;
      function setState(newLocal) {
        local = newLocal;
      }
      return [local, setState];
    },
  };
})();

function Counter() {
  const [count, setCount] = React.useState(0);
  return {
    click: () => setCount(count + 1),
    render: () => console.log(count),
  };
}
let App;
App = React.render(Counter); // initial render
App.click();
App = React.render(Counter);
