export default function Li() {
  const data = [
    {
      text: "All Products"
    },
    {
      text: "Popular Items"
    },
    {
      text: "New Arrivals"
    }
  ];
  return (
    <>
      {data.map((data) => {
        return (
          <li>
            <a class="dropdown-item" href="#!">
              {data.text}
            </a>
          </li>
        );
      })}
    </>
  );
}
