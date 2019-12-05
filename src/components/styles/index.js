/**
 * @author Wegner
 * @email wegner@arquia.com.br
 * @created 18-10-2019
 */
const mergeStyles = styles => {
  if (styles instanceof Array) {
    let applyTheme = theme => {
      return styles.reduce((acc, currentStyle) => {
        if (currentStyle instanceof Function)
          acc = Object.assign({}, acc, currentStyle(theme));
        else acc = Object.assign({}, acc, currentStyle);
        return acc;
      }, {});
    };
    return applyTheme;
  } else return styles;
};

export { mergeStyles };
