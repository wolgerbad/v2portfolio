export default function Card({ children, projectColor }) {
  return (
    <span
      className={`${projectColor} rounded-full px-4 py-2 text-violet-100 font-semibold`}
    >
      {children}
    </span>
  );
}
