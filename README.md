# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Keeping Components Pure...

Some JavaScript functions are pure: *only perform calculation and nothing more*

Characteristics:

- **It minds its own business:** It doesn't change objects/variables that existed before it was called.
- **Same Input Same Output:** A pure function should always return the same result.

# Examples:
## 1 - Recipe Component (A pure function)

```
function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water</li>
      <li>Add {drinkers} spoons of tea & {drinkers * 0.5} spoons of sugar</li>
    </ol>
  )
}

...

<Recipe drinkers = {2} />
<Recipe drinkers = {4} />
```

| INPUT | OUTPUT |
|-|-|
| drinkers={2} | 2 cups of water |
| drinkers={4} | 4 cups of water |

## 2 - Cup Component (Breaking the rule: side effects)
```
let guest = 0;

function Cup() {
  guest = guest + 1;
  return(
    <p>Tea cup for the guest #{guest}</p>
  )
}

...

<Cup /> 
<Cup />
<Cup />
<Cup />
```

| OUTPUT | *EXPECTED OUTPUT* |
|-|-|
| Tea cup for the guest #2 | *...guest #1* |
| Tea cup for the guest #4 | *...guest #2* |
| Tea cup for the guest #6 | *...guest #3* |
| Tea cup for the guest #8 | *...guest #4* |


## 3 - Cup Component Fixed (Passing guest as a prop instead)
```
function CupFixed({guestNumber}){
  return <p>Tea cup for guest {guestNumber}</p>
}

...

<CupFixed guestNumber = {1} />
<CupFixed guestNumber = {2} />
<CupFixed guestNumber = {3} />
```

| INPUT | OUTPUT |
|-|-|
| guestNumber = {1} | Tea cup for guest 1 |
| guestNumber = {2} | Tea cup for guest 2 |
| guestNumber = {3} | Tea cup for guest 3 |