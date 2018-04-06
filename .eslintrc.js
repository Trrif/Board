module.exports = {
    "extends": "standard",
    "rules": {
      "no-unused-vars": 1,
      "react/jsx-uses-react":1,
      "react/jsx-no-undef": 1,
      "react/jsx-uses-vars": 1,
      "jsx-quotes": [1, "prefer-single"],
    },
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
      "React": true
    },
    "parser": "babel-eslint",
    "plugins": [
    "react"
  ]
};
