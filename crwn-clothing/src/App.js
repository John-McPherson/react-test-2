
const App = () => {

  const catagories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    }

  ];

  return (
    <div className="catagories-container">
      {catagories.map(({ title }) => (

        <div className="catagory-container">
          {/* <ing/> */}
          <div className="catagory-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
