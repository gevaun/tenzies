export default function Dice(props) {
  return (
    <div
      className={
        props.value == props.pick
          ? `flex justify-center items-center text-2xl border border-green-400 rounded-lg px-5 py-3 bg-green-300 font-bold shadow-md cursor-default`
          : `flex justify-center items-center text-2xl border border-zinc-50 rounded-lg px-5 py-4 font-bold shadow-md cursor-pointer`
      }
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}
