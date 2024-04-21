export const Container = ({ children, className }) =>
(className ? (
  <div className={`${className}`}>{children}</div>
) : (
  <div className={_.container}>{children}</div>
));