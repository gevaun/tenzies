export default function Dice(props) {
    
  return (
    <div className={props.value == 1 ? `flex justify-center items-center  text-2xl border border-green-400 rounded-lg p-4 bg-green-300 font-bold shadow-md` : `flex justify-center items-center text-2xl border border-zinc-50 rounded-lg p-4 font-bold shadow-md`}>
      {props.value}
    </div>
  );
}
