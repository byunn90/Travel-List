export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numbPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numbPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          "You're ready to fly"
        ) : (
          <>
            Still need to pack your items ✈
            <span role="img" aria-label="Backpack">
              {" "}
              🎒
            </span>{" "}
            You have {numItems} items on your list, and you already packed{" "}
            {numbPacked} Amount ({percentage}%)
          </>
        )}
      </em>
    </footer>
  );
}
